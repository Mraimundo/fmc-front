import React from 'react';

import { ReactSVG } from 'react-svg';
import thumbUpIcon from 'assets/images/campaigns/thumb-up-icon.svg';
import thumbDownIcon from 'assets/images/campaigns/thumb-down-icon.svg';
import messagesIcon from 'assets/images/campaigns/messages-icon.svg';

import { Container, Row } from './styles';

const ApprovalBoard: React.FC = () => {
  const m = ['GRV', 'DN', 'CRM', 'MKT'];
  return (
    <Container>
      {m.map(item => (
        <Row key={item}>
          <h5>{item}</h5>
          <span>
            <ReactSVG src={thumbUpIcon} />
            Aprovada
          </span>
          <span>
            <ReactSVG
              src={thumbDownIcon}
              style={{ transform: 'translateY(5px)' }}
            />
            Não Aprovada
          </span>
          <span>
            <ReactSVG
              src={messagesIcon}
              style={{ transform: 'translateY(2px)' }}
            />
            Comentários
          </span>
        </Row>
      ))}
    </Container>
  );
};

export default ApprovalBoard;
