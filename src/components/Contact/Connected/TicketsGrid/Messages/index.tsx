import React from 'react';

import { Response as Message } from 'services/contact/connected/transformers/toMessagesListTransformer';
import { useAuth } from 'context/AuthContext';
import Loading from './Loading';
import { Container, Content, MessageBox } from './styles';

interface Props {
  messages: Message[];
  loading: boolean;
}
const Messages: React.FC<Props> = ({ messages, loading }) => {
  const { participant } = useAuth();

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        messages.map(message => (
          <Content>
            <MessageBox type={message.type}>
              <span>
                {`${message.date} - ${message.time} - ${
                  message.name || participant.name
                }`}
              </span>
              <p>{message.message}</p>
            </MessageBox>
          </Content>
        ))
      )}
    </Container>
  );
};

export default Messages;
