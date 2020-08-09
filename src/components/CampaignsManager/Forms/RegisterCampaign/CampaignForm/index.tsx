import React, { useEffect, useState, useMemo } from 'react';
import DatePicker from 'components/shared/DatePicker';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import { Audience } from 'services/campaignsManager/interfaces/Campaign';
import { useSelector, useDispatch } from 'react-redux';
import Input from 'components/shared/Input/BaseInput';
import {
  getCampaign,
  getErrors,
} from 'state/modules/campaigns-manager/selectors';
import {
  setFieldValue,
  addAudience,
  removeAudience,
  setEndDate,
  setStartDate,
  setMechanic,
} from 'state/modules/campaigns-manager/actions';
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
  const campaign = useSelector(getCampaign);
  const errors = useSelector(getErrors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (audienceSelected) {
      dispatch(addAudience(audienceSelected));
      setTimeout(() => {
        setAudienceSelected(null);
      }, 1000);
    }
  }, [dispatch, audienceSelected]);

  return useMemo(
    () => (
      <Container>
        <h4>Solicitar criação de campanha</h4>
        <MechanicsSelect
          setValue={value => dispatch(setMechanic(value))}
          value={campaign.mechanic}
          placeholder="Mecânica"
          error={errors.mechanic}
        />
        <h4>Título da Campanha</h4>
        <Input
          type="text"
          inputRole="secondary"
          value={campaign.title}
          error={errors.title}
          onChange={e =>
            dispatch(
              setFieldValue({ fieldName: 'title', value: e.target.value }),
            )
          }
        />
        <h4>Público</h4>
        <CustomersSelect
          setValue={value => setAudienceSelected(value)}
          value={audienceSelected}
          error={errors.audience}
          placeholder="Selecionar Clientes"
        />
        {campaign.audience.map(item => (
          <CostumerDetails key={`audience${item.customer.id}`}>
            <h3>{item.customer.name}</h3>
            <h4>Saldo R$ {item.balance}</h4>
            <ReactSVG
              src={deleteIcon}
              onClick={() => dispatch(removeAudience(item))}
            />
          </CostumerDetails>
        ))}
        <h4>Período</h4>
        <Box>
          <DatePicker
            value={campaign.startDate}
            onChange={e => dispatch(setStartDate(e))}
            placeholder="Data inicial"
            inputRole="secondary"
            error={errors.startDate}
          />
          <DatePicker
            value={campaign.endDate}
            onChange={e => dispatch(setEndDate(e))}
            placeholder="Data final"
            inputRole="secondary"
            error={errors.endDate}
          />
        </Box>
      </Container>
    ),
    [
      audienceSelected,
      campaign.endDate,
      campaign.startDate,
      campaign.audience,
      campaign.mechanic,
      campaign.title,
      errors,
      dispatch,
    ],
  );
};

export default CampaignForm;
