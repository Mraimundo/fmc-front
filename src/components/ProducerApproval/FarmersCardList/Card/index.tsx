/* eslint-disable @typescript-eslint/camelcase */
import React, { useCallback } from 'react';

import { Farmer } from 'services/producer-approval/interface';
import { formatDate } from 'util/datetime';
import { getNameAbbr } from 'util/string';

import {
  Container,
  Content,
  Actions,
  AvatarWrapper,
  ImageAvatar,
  InitialsAvatar,
  Fields,
  Button,
} from './styles';

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

  const approveFarmer = useCallback(() => {
    alert(`FARMER ID ${id}`);
  }, [id]);

  return (
    <Container>
      <Content>
        <AvatarWrapper>
          {picture && <ImageAvatar src={picture} alt={name} />}
          {!picture && <InitialsAvatar>{getNameAbbr(name)}</InitialsAvatar>}
        </AvatarWrapper>
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
        <Button type="button" buttonRole="quaternary" onClick={approveFarmer}>
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
