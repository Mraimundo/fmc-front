import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  Campaign,
  Audience,
} from 'services/campaignsManager/interfaces/Campaign';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCampaign,
  getErrors,
} from 'state/modules/campaigns-manager/selectors';
import {
  addAudience,
  removeAudience,
  setFieldValue,
} from 'state/modules/campaigns-manager/actions';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import { Button } from 'components/shared';

import {
  Container,
  CustomersSelect,
  CostumerDetails,
  ActionBox,
  Input,
  TextArea,
} from './styles';

export interface Props {
  handleAction(campaign: Campaign): Promise<void>;
}

const Configuration: React.FC<Props> = ({ handleAction }) => {
  const campaign = useSelector(getCampaign);
  const errors = useSelector(getErrors);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [audienceSelected, setAudienceSelected] = useState<Audience | null>(
    null,
  );

  useEffect(() => {
    if (audienceSelected) {
      dispatch(addAudience(audienceSelected));
      setTimeout(() => {
        setAudienceSelected(null);
      }, 1000);
    }
  }, [dispatch, audienceSelected]);

  const handleButtonClick = useCallback(async () => {
    setLoading(true);
    await handleAction(campaign);
    setLoading(false);
  }, [campaign, handleAction]);

  return useMemo(
    () => (
      <Container>
        <h4>Descrição da campanha</h4>
        <Input
          type="text"
          value={campaign.title}
          onChange={e =>
            dispatch(
              setFieldValue({ fieldName: 'title', value: e.target.value }),
            )
          }
          placeholder="Título da campanha"
          inputRole="secondary"
          error={errors.title}
        />
        <span>Resumo da campanha</span>
        <TextArea
          value={campaign.description}
          onChange={e =>
            dispatch(
              setFieldValue({
                fieldName: 'description',
                value: e.target.value,
              }),
            )
          }
          inputRole="secondary"
          error={errors.description}
        />
        <h4>Público</h4>
        <CustomersSelect
          setValue={value => setAudienceSelected(value)}
          value={audienceSelected}
          placeholder="Selecionar Canais"
          error={errors.audience}
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
        <ActionBox>
          <Button
            type="button"
            buttonRole="primary"
            onClick={handleButtonClick}
            loading={loading}
          >
            Próximo
          </Button>
        </ActionBox>
      </Container>
    ),
    [campaign, audienceSelected, dispatch, loading, handleButtonClick],
  );
};

export default Configuration;
