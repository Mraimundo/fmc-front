import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCampaign,
  getErrors,
} from 'state/modules/campaigns-manager/selectors';
import {
  setPrizeName,
  setPrizeDescription,
} from 'state/modules/campaigns-manager/actions';

import { ReactSVG } from 'react-svg';
import trophyIcon from 'assets/images/campaigns/trophy-icon.svg';

import { Container, Separator, Header, Body, Input, TextArea } from './styles';

const PrizeForm: React.FC = () => {
  const dispatch = useDispatch();
  const campaign = useSelector(getCampaign);
  const errors = useSelector(getErrors);

  return useMemo(
    () => (
      <Container>
        <Header>
          <ReactSVG src={trophyIcon} />
          <h4>Prêmio</h4>
        </Header>
        <Separator />
        <Body>
          <Input
            type="text"
            placeholder="Nome do produto"
            value={campaign.prize.name}
            error={errors['prize.name']}
            onChange={e => dispatch(setPrizeName(e.target.value))}
            inputRole="secondary"
          />
          <TextArea
            placeholder="Descrição do produto"
            value={campaign.prize.description}
            error={errors['prize.description']}
            onChange={e => dispatch(setPrizeDescription(e.target.value))}
            inputRole="secondary"
          />
          <span>
            Após a aprovação da sua campanha acesse o Personal Class no seu
            Catálogo de Prêmios e inicie o processo de orçamento da premiação
            escolhida.
          </span>
        </Body>
      </Container>
    ),
    [campaign.prize, dispatch, errors],
  );
};

export default PrizeForm;
