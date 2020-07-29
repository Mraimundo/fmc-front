import React, { useEffect, useState, useMemo } from 'react';
import DatePicker from 'components/shared/DatePicker';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import { Audience } from 'services/campaignsManager/interfaces/Campaign';
import { useRegisterForm } from '../../Context';
import {
  Container,
  CustomersSelect,
  MechanicsSelect,
  Box,
  CostumerDetails,
} from './styles';

const CampaignForm: React.FC = () => {
  const [audienceSelected, setAudienceSelected] = useState<Audience | null>(
    null,
  );

  const {
    campaign,
    setMechanic,
    addAudience,
    removeAudience,
    setStartDate,
    setEndDate,
    setTextsValue,
  } = useRegisterForm();

  useEffect(() => {
    if (audienceSelected) {
      addAudience(audienceSelected);
      setTimeout(() => {
        setAudienceSelected(null);
      }, 1000);
    }
  }, [addAudience, audienceSelected]);

  return useMemo(
    () => (
      <Container>
        <h4>Solicitar criação de campanha</h4>
        <MechanicsSelect
          setValue={value => setMechanic(value)}
          value={campaign.mechanic}
          placeholder="Mecânica"
        />
        <h4>Título da Campanha</h4>
        <input
          type="text"
          value={campaign.title}
          onChange={e => setTextsValue('title', e.target.value)}
        />
        <h4>Público</h4>
        <CustomersSelect
          setValue={value => setAudienceSelected(value)}
          value={audienceSelected}
          placeholder="Selecionar Clientes"
        />
        {campaign.audience.map(item => (
          <CostumerDetails key={`audience${item.customer.id}`}>
            <h3>{item.customer.name}</h3>
            <h4>Saldo R$ {item.balance}</h4>
            <ReactSVG src={deleteIcon} onClick={() => removeAudience(item)} />
          </CostumerDetails>
        ))}
        <h4>Período</h4>
        <Box>
          <DatePicker
            value={campaign.startDate}
            onChange={setStartDate}
            placeholder="Data inicial"
          />
          <DatePicker
            value={campaign.endDate}
            onChange={setEndDate}
            placeholder="Data final"
          />
        </Box>
      </Container>
    ),
    [
      removeAudience,
      setMechanic,
      setEndDate,
      setStartDate,
      setTextsValue,
      audienceSelected,
      campaign.endDate,
      campaign.startDate,
      campaign.audience,
      campaign.mechanic,
      campaign.title,
    ],
  );
};

export default CampaignForm;
