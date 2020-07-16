import React from 'react';

import { Container } from './style';

interface Props {
  name: string;
  actionUrl: string;
}

const Actions: React.FC<Props> = ({ name, actionUrl }) => {
  return <Container to={actionUrl}>{name}</Container>;
};

export default Actions;
