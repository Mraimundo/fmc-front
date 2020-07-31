import React, { useEffect, useState, useMemo } from 'react';
import { Option } from 'components/shared/Select';
import { Audience } from 'services/campaignsManager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import { Button } from 'components/shared';
import { useConfigurationForm } from '../Context';

import {
  Container,
  TitlesSelect,
  ChannelsSelect,
  CostumerDetails,
  ActionBox,
} from './styles';

const Form: React.FC = () => {
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [audienceSelected, setAudienceSelected] = useState<Audience | null>(
    null,
  );

  /* const {
    campaign,
    addAudience,
    removeAudience,
    setTextsValue,
  } = useConfigurationForm(); */

  /* useEffect(() => {
    if (audienceSelected) {
      addAudience(audienceSelected);
      setTimeout(() => {
        setAudienceSelected(null);
      }, 1000);
    }
  }, [addAudience, audienceSelected]); */

  return <></>;

  /* return useMemo(
    () => (
      <Container>
        <h4>Descrição da campanha</h4>
        <input
          type="text"
          value={campaign.title}
          onChange={e => setTextsValue('title', e.target.value)}
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
        {campaign.audience.map(item => (
          <CostumerDetails key={`audience${item.customer.id}`}>
            <h3>{item.customer.name}</h3>
            <h4>Saldo R$ {item.balance}</h4>
            <ReactSVG src={deleteIcon} onClick={() => removeAudience(item)} />
          </CostumerDetails>
        ))}
        <ActionBox>
          <Button type="button" buttonRole="primary">
            Próximo
          </Button>
        </ActionBox>
      </Container>
    ),
    [campaign, removeAudience, setTextsValue],
  ); */
};

export default Form;
