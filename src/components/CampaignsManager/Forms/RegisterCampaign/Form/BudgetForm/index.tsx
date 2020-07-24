import React, { useMemo } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import InputValue from 'components/CampaignsManager/Inputs/NumberMaskInput';
import { formatPointsInput, formatRebatePointsInput } from 'util/points';
import { useRegisterForm } from '../../Context';

import { Container, Box, Input } from './styles';

const BudgetForm: React.FC = () => {
  const { campaign, setPointsValue } = useRegisterForm();

  return useMemo(
    () => (
      <Container>
        <h4>Indicar origem da verba:</h4>
        <Box>
          <Checkbox color="default" />
          <h6>Pontos Rebate</h6>
          <InputValue
            onChange={value => {
              setPointsValue('affordPoints', value);
            }}
            value={campaign.affordPoints}
            component={Input}
            formatValue={formatRebatePointsInput}
            placeholder="1.000 pontos"
          />
        </Box>
        <h5>Precisa de verba complementar?</h5>
        <Box>
          <Checkbox color="default" />
          <h6>Pontos Rebate</h6>
          <InputValue
            onChange={value => {
              setPointsValue('complementaryAffordPoints', value);
            }}
            value={campaign.complementaryAffordPoints}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
          />
        </Box>
        <Box>
          <Checkbox color="default" />
          <h6>Budget Local</h6>
          <InputValue
            onChange={value => {
              setPointsValue('complementaryLocalBudget', value);
            }}
            value={campaign.complementaryLocalBudget}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
          />
        </Box>
        <Box>
          <Checkbox color="default" />
          <h6>Budget CRM</h6>
          <InputValue
            onChange={value => {
              setPointsValue('complementaryCrmBudget', value);
            }}
            value={campaign.complementaryCrmBudget}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
          />
        </Box>
        <h4>Retorno esperado da campanha:</h4>
        <Box>
          <div />
          <h6>Sell-in</h6>
          <InputValue
            onChange={value => {
              setPointsValue('expectedSellIn', value);
            }}
            value={campaign.expectedSellIn}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
          />
        </Box>
        <Box>
          <div />
          <h6>Sell-out</h6>
          <InputValue
            onChange={value => {
              setPointsValue('expectedSellOut', value);
            }}
            value={campaign.expectedSellOut}
            component={Input}
            formatValue={formatPointsInput}
            placeholder="R$ 0,00"
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
      setPointsValue,
    ],
  );
};

export default BudgetForm;
