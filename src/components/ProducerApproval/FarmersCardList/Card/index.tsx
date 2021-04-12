/* eslint-disable @typescript-eslint/camelcase */
import React, { useCallback } from 'react';

import { Farmer } from 'services/producer-approval/interface';
import { formatDate } from 'util/datetime';
import { getNameAbbr } from 'util/string';
import { useFarmersContext } from 'pages/ProducerApproval/Context';

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
    setApprovalModalIsOpen,
    setSelectedFarmerRequestId,
    setReprovalModalIsOpen,
    setFarmerDetailsIsOpen,
    setShowFarmerDetailActions,
  } = useFarmersContext();

  const {
    id,
    name,
    cpf,
    cell_phone,
    client_group,
    created,
    email,
    picture,
    request_status,
    request_id,
  } = data;

  const handleApproveFarmer = useCallback(() => {
    setSelectedFarmerRequestId(request_id);
    setApprovalModalIsOpen(true);
  }, [request_id, setApprovalModalIsOpen, setSelectedFarmerRequestId]);

  const handleReproveFarmer = useCallback(() => {
    setSelectedFarmerRequestId(request_id);
    setReprovalModalIsOpen(true);
  }, [request_id, setReprovalModalIsOpen, setSelectedFarmerRequestId]);

  const handleShowFarmerDetails = useCallback(() => {
    setSelectedFarmerRequestId(request_id);
    console.log('REQUEST_ID_DETAILS', request_id);
    setShowFarmerDetailActions(request_status === 'Aguardando');
    setFarmerDetailsIsOpen(true);
  }, [
    request_id,
    request_status,
    setFarmerDetailsIsOpen,
    setSelectedFarmerRequestId,
    setShowFarmerDetailActions,
  ]);

  const handleReprovedMessage = useCallback(() => {
    alert('THIS IS THE REPROVAL REASON');
  }, []);

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
        <Button
          type="button"
          buttonRole="quaternary"
          onClick={handleShowFarmerDetails}
        >
          Ver Mais
        </Button>
        {request_status === 'Aguardando' && (
          <>
            <Button
              type="button"
              buttonRole="quaternary"
              onClick={handleApproveFarmer}
            >
              Aprovar
            </Button>
            <Button
              type="button"
              buttonRole="quaternary"
              onClick={handleReproveFarmer}
            >
              Reprovar
            </Button>
          </>
        )}
        {request_status === 'Reprovado' && (
          <Button
            type="button"
            buttonRole="quaternary"
            onClick={handleReprovedMessage}
          >
            Reprovado
          </Button>
        )}
      </Actions>
    </Container>
  );
};

export default Card;
