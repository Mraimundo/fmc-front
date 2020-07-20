import React from 'react';
import ApprovalBoard from 'components/CampaignsManager/ApprovalBoard';
import { Container, Box, Content, MessageBox } from './styles';

const Form: React.FC = () => {
  const messages = [
    {
      date: '02/04/2020',
      time: '14h00',
      side: 'r',
      name: 'nome do usuário (remetente)',
      message: 'Preciso de ajuda para incluir um participante',
    },
    {
      date: '02/04/2020',
      time: '14h00',
      side: 'r',
      name: 'nome do usuário (remetente)',
      message: 'Preciso de ajuda para incluir um participante',
    },
  ];
  return (
    <Container>
      <h4>Aprovação</h4>
      <ApprovalBoard />
      <h4>Histórico</h4>
      <Box>
        {messages.map(message => (
          <Content>
            <MessageBox side="r">
              <span>
                {`${message.date} - ${message.time} - ${message.name}`}
              </span>
              <p>{message.message}</p>
            </MessageBox>
          </Content>
        ))}
      </Box>
    </Container>
  );
};

export default Form;
