import React from 'react';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import closeIcon from 'assets/images/training/close-icon.svg';
import approvalIcon from 'assets/images/campaigns/approval-icon.svg';

import { Approver } from 'services/campaignsManager/interfaces/Campaign';
import BoardBox from './BoardBox';
import { Modal, Container, Content, Close } from './styles';

interface Props {
  isOpen: boolean;
  onRequestClose(): void;
  approvers: Approver[];
}

const ApprovalBoard: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  approvers,
}) => {
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
          <BoardBox approvers={approvers} />
        </Content>
        <Button type="button" buttonRole="primary" onClick={onRequestClose}>
          Ok
        </Button>
      </Container>
    </Modal>
  );
};

export default ApprovalBoard;
