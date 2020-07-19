import React, { useState } from 'react';
import { Option } from 'components/shared/Select';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import { Button } from 'components/shared';

import {
  Container,
  TitlesSelect,
  ChannelsSelect,
  CostumerDetails,
  ActionBox,
} from './styles';

const Form: React.FC = () => {
  const [titleSelected, setTitleSelected] = useState<Option | null>(null);
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);

  return (
    <Container>
      <h4>Descrição da campanha</h4>
      <TitlesSelect
        setValue={value => setTitleSelected(value)}
        value={titleSelected}
        placeholder="Título da campanha"
      />
      <span>Resumo da campanha</span>
      <textarea />
      <h4>Público</h4>
      <ChannelsSelect
        setValue={value => setChannelSelected(value)}
        value={channelSelected}
        placeholder="Selecionar Canais"
      />
      <CostumerDetails>
        <h3>Nome do Cliente</h3>
        <h4>Saldo R$ 3.000,00</h4>
        <ReactSVG src={deleteIcon} />
      </CostumerDetails>
      <CostumerDetails>
        <h3>Nome do Cliente</h3>
        <h4>Saldo R$ 3.000,00</h4>
        <ReactSVG src={deleteIcon} />
      </CostumerDetails>
      <CostumerDetails>
        <h3>Nome do Cliente</h3>
        <h4>Saldo R$ 3.000,00</h4>
        <ReactSVG src={deleteIcon} />
      </CostumerDetails>
      <ActionBox>
        <Button type="button" buttonRole="primary">
          Próximo
        </Button>
      </ActionBox>
    </Container>
  );
};

export default Form;
