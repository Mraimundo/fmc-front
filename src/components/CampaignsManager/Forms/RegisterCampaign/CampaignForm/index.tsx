import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import DatePicker from 'components/shared/DatePicker';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import { Audience } from 'services/campaignsManager/interfaces/Campaign';
import { AudienceHandles } from 'components/CampaignsManager/Selects/Audience';
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
import { EstablishmentTypes } from 'config/constants';
import {
  Container,
  CustomersSelect,
  MechanicsSelect,
  Box,
  CostumerDetails,
  Actions,
  Button,
  CostumersContainer,
} from './styles';

enum ButtonSelectText {
  ResaleAdd,
  CoopAdd,
  RemoveAll,
}

const CampaignForm: React.FC = () => {
  const audienceRef = useRef<AudienceHandles>(null);
  const [loading, setLoading] = useState(false);
  const [actionSelected, setActionSelected] = useState<ButtonSelectText | null>(
    null,
  );
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

  type Fn = () => Promise<void>;

  const handleButtonClick = useCallback(
    async (fn: Fn, actionName: ButtonSelectText) => {
      setLoading(true);
      setActionSelected(actionName);
      await fn();
      setLoading(false);
      setActionSelected(null);
    },
    [],
  );

  const addAllResales = useCallback(async (): Promise<void> => {
    const data = audienceRef.current?.options.filter(
      item => item.customer.type === EstablishmentTypes.Resale,
    );
    if (data) {
      dispatch(addAudience(data));
    }
  }, [dispatch]);

  const addAllCooperative = useCallback(async (): Promise<void> => {
    const data = audienceRef.current?.options.filter(
      item => item.customer.type === EstablishmentTypes.Cooperative,
    );
    if (data) {
      dispatch(addAudience(data));
    }
  }, [dispatch]);

  const removeAll = useCallback(async (): Promise<void> => {
    if (audienceRef.current?.options) {
      dispatch(removeAudience(audienceRef.current.options));
    }
  }, [dispatch]);

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
          ref={audienceRef}
        />
        <Actions>
          <Button
            type="button"
            onClick={() =>
              handleButtonClick(addAllResales, ButtonSelectText.ResaleAdd)
            }
            disabled={loading}
            loading={loading && actionSelected === ButtonSelectText.ResaleAdd}
          >
            Todas as Revendas
          </Button>
          <Button
            type="button"
            onClick={() =>
              handleButtonClick(addAllCooperative, ButtonSelectText.CoopAdd)
            }
            disabled={loading}
            loading={loading && actionSelected === ButtonSelectText.CoopAdd}
          >
            Todas as Cooperativas
          </Button>
          <Button
            type="button"
            onClick={() =>
              handleButtonClick(removeAll, ButtonSelectText.RemoveAll)
            }
            disabled={loading}
            loading={loading && actionSelected === ButtonSelectText.RemoveAll}
          >
            Remover Todos
          </Button>
        </Actions>
        <CostumersContainer>
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
        </CostumersContainer>
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
      addAllResales,
      addAllCooperative,
      actionSelected,
      handleButtonClick,
      loading,
      removeAll,
    ],
  );
};

export default CampaignForm;
