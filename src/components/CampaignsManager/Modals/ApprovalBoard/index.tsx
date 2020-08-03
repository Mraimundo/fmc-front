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
}

type Mode = 'board' | 'comment';

const ApprovalBoard: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  approvers: _approvers,
  myProfile,
  onDisapprove,
  onApprove,
}) => {
  const [comment, setComment] = useState('');
  const [canComment, setCanComment] = useState(false);
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
    }
  }, [_approvers, isOpen]);

  const handleCommentClick = useCallback(
    (approver: Approver) => {
      setApproverSelected(approver);
      setComment(approver.comments[0] || '');
      setCanComment(myProfile === approver.profile);
      setMode('comment');
    },
    [myProfile],
  );

  const handleApproveClick = useCallback(
    (approver: Approver) => {
      if (approver.profile !== myProfile) return;
      setApprovers(items => {
        return items.map(item => {
          if (approver.profile === item.profile) {
            item.status = 'approved';
          }
          return item;
        });
      });
    },
    [myProfile],
  );

  const handleDisapproveClick = useCallback(
    (approver: Approver) => {
      if (approver.profile !== myProfile) return;
      setApprovers(items => {
        return items.map(item => {
          if (approver.profile === item.profile) {
            item.status = 'disapproved';
          }
          return item;
        });
      });
    },
    [myProfile],
  );

  const approve = useCallback(
    async (data: Approver): Promise<void> => {
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
    [addToast, onRequestClose, onApprove],
  );

  const disapprove = useCallback(
    async (data: Approver): Promise<void> => {
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
    [addToast, onRequestClose, onDisapprove],
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
              onChange={
                canComment ? e => setComment(e.target.value) : undefined
              }
            />
          )}
        </Content>
        <Button type="button" buttonRole="primary" onClick={handleButtonClick}>
          {mode === 'board' || myProfile !== approverSelected?.profile
            ? 'Ok'
            : 'Salvar'}
        </Button>
      </Container>
    </Modal>
  );
};

export default ApprovalBoard;
