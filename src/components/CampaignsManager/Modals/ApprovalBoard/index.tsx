import React, { useState, useCallback } from 'react';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';
import approvalIcon from 'assets/images/campaigns/approval-icon.svg';

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
  myProfile?: ApproverProfile;
}

type Mode = 'board' | 'comment';

const ApprovalBoard: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  approvers,
  myProfile = 'GRV',
}) => {
  const [comment, setComment] = useState('');
  const [canComment, setCanComment] = useState(false);
  const [mode, setMode] = useState<Mode>('board');
  const [approverSelected, setApproverSelected] = useState<Approver | null>(
    null,
  );

  const handleCommentClick = useCallback(
    (approver: Approver) => {
      setApproverSelected(approver);
      setComment(approver.comments[0] || '');
      setCanComment(myProfile === approver.profile);
      setMode('comment');
    },
    [myProfile],
  );

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
            <ReactSVG src={approvalIcon} />
            Aprovação
          </h3>
          {mode === 'board' ? (
            <BoardBox
              approvers={approvers}
              onCommentClick={handleCommentClick}
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
        <Button type="button" buttonRole="primary" onClick={onRequestClose}>
          Ok
        </Button>
      </Container>
    </Modal>
  );
};

export default ApprovalBoard;
