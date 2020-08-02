import React from 'react';

import {
  Approver,
  ApproverProfile,
} from 'services/campaignsManager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import thumbUpIcon from 'assets/images/campaigns/thumb-up-icon.svg';
import thumbDownIcon from 'assets/images/campaigns/thumb-down-icon.svg';
import messagesIcon from 'assets/images/campaigns/messages-icon.svg';

import {
  Container,
  Row,
  Icon,
  ApprovedIconContainer,
  DisapprovedIconContainer,
  CommentIconContainer,
} from './styles';

interface Props {
  approvers: Approver[];
  myProfile: ApproverProfile;
  onCommentClick(approver: Approver): void;
  onApproveClick(approver: Approver): void;
  onDisapproveClick(approver: Approver): void;
}

const ApprovalBoard: React.FC<Props> = ({
  approvers,
  onCommentClick,
  onApproveClick,
  onDisapproveClick,
  myProfile,
}) => {
  return (
    <Container>
      {approvers.map(item => (
        <Row
          key={`approver-${item.profile}`}
          myline={myProfile === item.profile}
          status={item.status}
        >
          <h5>{item.profile}</h5>
          <ApprovedIconContainer
            approved={item.status === 'approved'}
            myline={myProfile === item.profile}
            onClick={() => onApproveClick(item)}
          >
            <ReactSVG src={thumbUpIcon} />
            Aprovada
          </ApprovedIconContainer>
          <DisapprovedIconContainer
            disapproved={item.status === 'disapproved'}
            myline={myProfile === item.profile}
            onClick={() => onDisapproveClick(item)}
          >
            <ReactSVG
              src={thumbDownIcon}
              style={{ transform: 'translateY(5px)' }}
            />
            Não Aprovada
          </DisapprovedIconContainer>
          <CommentIconContainer
            onClick={() => onCommentClick(item)}
            myline={myProfile === item.profile}
          >
            <ReactSVG
              src={messagesIcon}
              style={{ transform: 'translateY(2px)' }}
            />
            Comentários
          </CommentIconContainer>
        </Row>
      ))}
    </Container>
  );
};

export default ApprovalBoard;
