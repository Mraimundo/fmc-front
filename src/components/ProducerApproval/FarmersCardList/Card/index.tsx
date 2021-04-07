/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';

import { Farmer } from 'services/producer-approval/interface';
import { formatDate } from 'util/datetime';
import { Container, Content, Actions, Avatar, Fields, Button } from './styles';

interface CardProps {
  data: Farmer;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const {
    id,
    name,
    cpf,
    cell_phone,
    client_group,
    created,
    email,
    picture,
  } = data;

  return (
    <Container>
      <Content>
        <Avatar>
          <img src={picture} alt={name} />
        </Avatar>
        <Fields>
          <h4>{name}</h4>
          <p>{client_group}</p>
          <p>{email}</p>
          <p>{cpf}</p>
          <p>{cell_phone}</p>
          <span>Cadastrado em {formatDate(created)}</span>
        </Fields>
      </Content>
      <Actions>
        <Button type="button" buttonRole="quaternary">
          Ver Mais
        </Button>
        <Button type="button" buttonRole="quaternary">
          Aprovar
        </Button>
        <Button type="button" buttonRole="quaternary">
          Reprovar
        </Button>
      </Actions>
    </Container>
  );
};

export default Card;
