import React from 'react';

import { Container, Content, MessageBox } from './styles';

interface Message {
  date: string;
  time: string;
  type: 'r' | 'p';
  name: string;
  message: string;
}

interface Props {
  messages: Message[];
}
const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Content>
          <MessageBox type={message.type}>
            <span>{`${message.date} - ${message.time} - ${message.name}`}</span>
            <p>{message.message}</p>
          </MessageBox>
        </Content>
      ))}
    </Container>
  );
};

export default Messages;
