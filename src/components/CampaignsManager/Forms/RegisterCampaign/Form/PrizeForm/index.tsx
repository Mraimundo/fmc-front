import React, { useMemo } from 'react';

import { ReactSVG } from 'react-svg';
import trophyIcon from 'assets/images/campaigns/trophy-icon.svg';
import searchIcon from 'assets/images/campaigns/search-icon.svg';

import { useRegisterForm } from '../../Context';

import { Container, Separator, Header, Body } from './styles';

const PrizeForm: React.FC = () => {
  const { campaign, setPrizeName, setPrizeDescription } = useRegisterForm();

  return useMemo(
    () => (
      <Container>
        <Header>
          <ReactSVG src={trophyIcon} />
          <h4>Prêmio</h4>
          <span>Pesquisar no Marketplace</span>
          <ReactSVG src={searchIcon} />
        </Header>
        <Separator />
        <Body>
          <input
            type="text"
            placeholder="Nome do produto"
            value={campaign.prize.name}
            onChange={e => setPrizeName(e.target.value)}
          />
          <textarea
            placeholder="Descrição do produto"
            value={campaign.prize.description}
            onChange={e => setPrizeDescription(e.target.value)}
          />
          <span>
            Após a aprovação da sua campanha acesse o Personal Class no seu
            Catálogo de Prêmios e inicie o processo de orçamento da premiação
            escolhida.
          </span>
        </Body>
      </Container>
    ),
    [campaign.prize, setPrizeName, setPrizeDescription],
  );
};

export default PrizeForm;
