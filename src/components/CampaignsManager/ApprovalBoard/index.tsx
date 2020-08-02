import React from 'react';

import { Approver } from 'services/campaignsManager/interfaces/Campaign';
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
} from './styles';

interface Props {
  approvers: Approver[];
}

const ApprovalBoard: React.FC<Props> = ({ approvers }) => {
  return (
    <Container>
      {approvers.map(item => (
        <Row key={`approver-${item.profile}`}>
          <h5>{item.profile}</h5>
          <ApprovedIconContainer approved={item.status === 'approved'}>
            <ReactSVG src={thumbUpIcon} />
            Aprovada
          </ApprovedIconContainer>
          <DisapprovedIconContainer disapproved={item.status === 'disapproved'}>
            <ReactSVG
              src={thumbDownIcon}
              style={{ transform: 'translateY(5px)' }}
            />
            Não Aprovada
          </DisapprovedIconContainer>
          <Icon>
            <ReactSVG
              src={messagesIcon}
              style={{ transform: 'translateY(2px)' }}
            />
            Comentários
          </Icon>
        </Row>
      ))}
    </Container>
  );
};

export default ApprovalBoard;
