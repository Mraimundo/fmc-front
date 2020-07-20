import React from 'react';
import { Button } from 'components/shared';
import CampaingForm from './CampaignForm';
import PrizeForm from './PrizeForm';
import BudgetForm from './BudgetForm';
import ProductForm from './ProductForm';

import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <Container>
      <CampaingForm />
      <PrizeForm />
      <BudgetForm />
      <ProductForm />
      <span>Observações</span>
      <textarea />
      <Button type="button" buttonRole="primary">
        Enviar
      </Button>
    </Container>
  );
};

export default Form;
