import React from 'react';
import { Comment } from 'services/harvest-term/interface';

import { MdMoodBad as SadIcon } from 'react-icons/md';
import { Container, MessageBox, Content, NoResults } from './styles';

interface CommentsListProps {
  comments: Comment[];
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <Container>
      {comments.length === 0 && (
        <NoResults>
          <SadIcon size={24} /> <p>{'  '}Não há comentários</p>
        </NoResults>
      )}
      {comments.map(({ comment, participantName, dateTime }) => (
        <Content>
          <MessageBox>
            <span>{`${dateTime} - ${participantName}`}</span>
            <p>{comment}</p>
          </MessageBox>
        </Content>
      ))}
    </Container>
  );
};

export default CommentsList;
