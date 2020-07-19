import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

import { Container, Box } from './styles';

const BudgetForm: React.FC = () => {
  return (
    <Container>
      <h4>Indicar origem da verba:</h4>
      <Box>
        <Checkbox color="default" />
        <h6>Pontos Rebate</h6>
        <input type="text" />
      </Box>
      <h5>Precisa de verba complementar?</h5>

      <Box>
        <Checkbox color="default" />
        <h6>Pontos Rebate</h6>
        <input type="text" />
      </Box>

      <Box>
        <Checkbox color="default" />
        <h6>Budget Local</h6>
        <input type="text" />
      </Box>

      <Box>
        <Checkbox color="default" />
        <h6>Budget CRM</h6>
        <input type="text" />
      </Box>

      <h4>Retorno esperado da campanha:</h4>
      <Box>
        <div />
        <h6>Sell-in</h6>
        <input type="text" />
      </Box>
      <Box>
        <div />
        <h6>Sell-out</h6>
        <input type="text" />
      </Box>
    </Container>
  );
};

export default BudgetForm;
