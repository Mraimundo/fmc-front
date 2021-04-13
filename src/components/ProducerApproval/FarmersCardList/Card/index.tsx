/* eslint-disable @typescript-eslint/camelcase */
import React, { useCallback } from 'react';

import { Farmer } from 'services/producer-approval/interface';
import { formatDate } from 'util/datetime';
import { getNameAbbr } from 'util/string';
import { cpfMask, cellPhoneMask } from 'util/masks';
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
    setSelectedFarmerId,
    showReproveMessage,
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
    setSelectedFarmerId(id);
    setShowFarmerDetailActions(request_status === 'Aguardando');
    setFarmerDetailsIsOpen(true);
  }, [
    id,
    request_id,
    request_status,
    setFarmerDetailsIsOpen,
    setSelectedFarmerId,
    setSelectedFarmerRequestId,
    setShowFarmerDetailActions,
  ]);

  const handleReprovedMessage = useCallback(() => {
    setSelectedFarmerRequestId(request_id);
    showReproveMessage();
  }, [request_id, setSelectedFarmerRequestId, showReproveMessage]);

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
          <p>{cpfMask(cpf)}</p>
          <p>{`${cellPhoneMask(cell_phone)}`}</p>
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
              reprove
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
