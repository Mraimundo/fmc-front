import React, { useState, useCallback, useEffect } from 'react';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';
import approvalIcon from 'assets/images/campaigns/approval-icon.svg';
import commentIcon from 'assets/images/campaigns/messages-icon.svg';
import { useToast } from 'context/ToastContext';

import {
  Approver,
  ApproverProfile,
} from 'services/campaignsManager/interfaces/Campaign';
import BoardBox from './BoardBox';
import { Modal, Container, Content, Close } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
  approvers: Approver[];
  myProfile: ApproverProfile;
  onDisapprove(approver: Approver): Promise<void>;
  onApprove(approver: Approver): Promise<void>;
  profileTurnToApprove?: ApproverProfile | null;
}

type Mode = 'board' | 'comment';

const ApprovalBoard: React.FC<Props> = ({
  isOpen,
  approvers: _approvers,
  myProfile,
  profileTurnToApprove,
  onRequestClose,
  onDisapprove,
  onApprove,
}) => {
  const [comment, setComment] = useState('');
  const [canComment, setCanComment] = useState(false);
  const [canDoAction, setCanDoAction] = useState(false);
  const [mode, setMode] = useState<Mode>('board');
  const [approverSelected, setApproverSelected] = useState<Approver | null>(
    null,
  );
  const [approvers, setApprovers] = useState<Approver[]>([]);
  const { addToast } = useToast();

  useEffect(() => {
    if (isOpen) {
      setComment('');
      setCanComment(false);
      setMode('board');
      setApprovers([..._approvers]);
      setApproverSelected(null);
      setCanDoAction(
        myProfile === profileTurnToApprove &&
          _approvers.find(item => item.profile === myProfile)?.status ===
            'pending',
      );
    }
  }, [_approvers, isOpen, myProfile, profileTurnToApprove]);

  const handleCommentClick = useCallback(
    (approver: Approver) => {
      setApproverSelected(approver);
      setComment(approver.comments[0] || '');
      setCanComment(myProfile === approver.profile && canDoAction);
      setMode('comment');
    },
    [myProfile, canDoAction],
  );

  const checkBeforeAction = useCallback(
    (approver: Approver): boolean => {
      if (approver.profile !== myProfile) {
        addToast({
          title: 'Você não tem permissão para esta ação',
          type: 'error',
        });
        return false;
      }

      if (myProfile !== profileTurnToApprove) {
        addToast({
          title: 'Esta ação não está disponível para você no momento',
          type: 'error',
        });
        return false;
      }

      if (!canDoAction) {
        addToast({
          title: 'Você não tem permissão para esta ação',
          type: 'error',
        });
        return false;
      }

      return true;
    },
    [myProfile, addToast, canDoAction, profileTurnToApprove],
  );

  const handleApproveClick = useCallback(
    (approver: Approver) => {
      if (!checkBeforeAction(approver)) return;
      setApprovers(items => {
        return items.map(item => {
          if (approver.profile === item.profile) {
            item.status = 'approved';
          }
          return item;
        });
      });
    },
    [checkBeforeAction],
  );

  const handleDisapproveClick = useCallback(
    (approver: Approver) => {
      if (!checkBeforeAction(approver)) return;
      setApprovers(items => {
        return items.map(item => {
          if (approver.profile === item.profile) {
            item.status = 'disapproved';
          }
          return item;
        });
      });
    },
    [checkBeforeAction],
  );

  const approve = useCallback(
    async (data: Approver): Promise<void> => {
      if (!canDoAction) {
        onRequestClose();
        return;
      }
      try {
        await onApprove(data);
        onRequestClose();
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha ao aprovar campanha. Por favor contate o suporte',
          type: 'error',
        });
      }
    },
    [addToast, onRequestClose, onApprove, canDoAction],
  );

  const disapprove = useCallback(
    async (data: Approver): Promise<void> => {
      if (!canDoAction) {
        onRequestClose();
        return;
      }
      if (
        !data.comments ||
        data.comments.length === 0 ||
        data.comments[0] === ''
      ) {
        addToast({
          title: 'Para reprovar uma campanha é obrigatório fazer um comentário',
          type: 'error',
        });
        return;
      }
      try {
        await onDisapprove(data);
        onRequestClose();
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha ao reprovar campanha. Por favor contate o suporte',
          type: 'error',
        });
      }
    },
    [addToast, onRequestClose, onDisapprove, canDoAction],
  );

  const handleButtonClick = useCallback(async () => {
    if (mode === 'board') {
      const foundItem = approvers.find(item => item.profile === myProfile);
      if (foundItem?.status === 'approved') {
        await approve(foundItem);
        return;
      }
      if (foundItem?.status === 'disapproved') {
        await disapprove(foundItem);
        return;
      }
      onRequestClose();
      return;
    }
    if (mode === 'comment') {
      if (canComment) {
        setApprovers(items => {
          return items.map(item => {
            if (item.profile === myProfile) {
              item.comments = [comment];
            }
            return item;
          });
        });
      }
      setMode('board');
    }
  }, [
    canComment,
    onRequestClose,
    mode,
    comment,
    myProfile,
    approvers,
    approve,
    disapprove,
  ]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} type="primary">
      <Container>
        <Close>
          <button type="button" onClick={onRequestClose}>
            <ReactSVG src={closeIcon} />
          </button>
        </Close>
        <Content>
          <h3>
            <ReactSVG src={mode === 'board' ? approvalIcon : commentIcon} />
            {mode === 'board' ? 'Aprovação' : 'Comentário'}
          </h3>
          {mode === 'board' ? (
            <BoardBox
              approvers={approvers}
              onCommentClick={handleCommentClick}
              onApproveClick={handleApproveClick}
              onDisapproveClick={handleDisapproveClick}
              myProfile={myProfile}
            />
          ) : (
            <textarea
              value={comment}
              onChange={e => {
                if (canComment) setComment(e.target.value);
              }}
            />
          )}
        </Content>
        <Button type="button" buttonRole="primary" onClick={handleButtonClick}>
          {mode === 'board' ||
          myProfile !== approverSelected?.profile ||
          !canDoAction
            ? 'Ok'
            : 'Salvar'}
        </Button>
      </Container>
    </Modal>
  );
};

export default ApprovalBoard;
