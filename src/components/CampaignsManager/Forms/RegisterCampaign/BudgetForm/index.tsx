import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCampaign,
  getErrors,
} from 'state/modules/campaigns-manager/selectors';
import { setPointsValue } from 'state/modules/campaigns-manager/actions';
import Checkbox from '@material-ui/core/Checkbox';
import InputValue from 'components/CampaignsManager/Inputs/NumberMaskInput';
import { formatPointsInput, formatRebatePointsInput } from 'util/points';

import { Container, Box, Input } from './styles';

const BudgetForm: React.FC = () => {
  const dispatch = useDispatch();
  const campaign = useSelector(getCampaign);
  const errors = useSelector(getErrors);

  return useMemo(
    () => (
      <Container>
        <h4>Indicar origem da verba:</h4>
        <Box>
          <Checkbox color="default" />
          <h6>Pontos Rebate</h6>
          <InputValue
            onChange={value => {
              dispatch(setPointsValue({ fieldName: 'affordPoints', value }));
            }}
            value={campaign.affordPoints}
            component={Input}
            formatValue={formatRebatePointsInput}
            placeholder="0 pontos"
            inputRole="secondary"
          />
        </Box>
        <h5>Precisa de verba complementar?</h5>
        <Box>
          <Checkbox color="default" />
          <h6>Pontos Marketing</h6>
          <InputValue
            onChange={value => {
              dispatch(
                setPointsValue({
                  fieldName: 'complementaryAffordPoints',
                  value,
                }),
              );
            }}
            value={campaign.complementaryAffordPoints}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
            inputRole="secondary"
          />
        </Box>
        <Box>
          <Checkbox color="default" />
          <h6>Pontos Diretoria</h6>
          <InputValue
            onChange={value => {
              dispatch(
                setPointsValue({
                  fieldName: 'complementaryLocalBudget',
                  value,
                }),
              );
            }}
            value={campaign.complementaryLocalBudget}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
            inputRole="secondary"
          />
        </Box>
        <Box>
          <Checkbox color="default" />
          <h6>Pontos Ações aceleradoras</h6>
          <InputValue
            onChange={value => {
              dispatch(
                setPointsValue({ fieldName: 'complementaryCrmBudget', value }),
              );
            }}
            value={campaign.complementaryCrmBudget}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
            inputRole="secondary"
          />
        </Box>
        <h4>Retorno esperado da campanha:</h4>
        <Box>
          <div />
          <h6>Sell-in</h6>
          <InputValue
            onChange={value => {
              dispatch(setPointsValue({ fieldName: 'expectedSellIn', value }));
            }}
            value={campaign.expectedSellIn}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
            inputRole="secondary"
            error={errors.expectedSellIn}
          />
        </Box>
        <Box>
          <div />
          <h6>Sell-out</h6>
          <InputValue
            onChange={value => {
              dispatch(setPointsValue({ fieldName: 'expectedSellOut', value }));
            }}
            value={campaign.expectedSellOut}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
            inputRole="secondary"
            error={errors.expectedSellOut}
          />
        </Box>
      </Container>
    ),
    [
      campaign.affordPoints,
      campaign.complementaryCrmBudget,
      campaign.complementaryAffordPoints,
      campaign.complementaryLocalBudget,
      campaign.expectedSellIn,
      campaign.expectedSellOut,
      errors,
      dispatch,
    ],
  );
};

export default BudgetForm;
