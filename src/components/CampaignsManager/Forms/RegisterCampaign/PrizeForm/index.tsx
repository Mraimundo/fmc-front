import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCampaign } from 'state/modules/campaigns-manager/selectors';
import {
  setPrizeName,
  setPrizeDescription,
} from 'state/modules/campaigns-manager/actions';

import { ReactSVG } from 'react-svg';
import trophyIcon from 'assets/images/campaigns/trophy-icon.svg';

import { Container, Separator, Header, Body } from './styles';

const PrizeForm: React.FC = () => {
  const dispatch = useDispatch();
  const campaign = useSelector(getCampaign);

  return useMemo(
    () => (
      <Container>
        <Header>
          <ReactSVG src={trophyIcon} />
          <h4>Prêmio</h4>
        </Header>
        <Separator />
        <Body>
          <input
            type="text"
            placeholder="Nome do produto"
            value={campaign.prize.name}
            onChange={e => dispatch(setPrizeName(e.target.value))}
          />
          <textarea
            placeholder="Descrição do produto"
            value={campaign.prize.description}
            onChange={e => dispatch(setPrizeDescription(e.target.value))}
          />
          <span>
            Após a aprovação da sua campanha acesse o Personal Class no seu
            Catálogo de Prêmios e inicie o processo de orçamento da premiação
            escolhida.
          </span>
        </Body>
      </Container>
    ),
    [campaign.prize, dispatch],
  );
};

export default PrizeForm;
