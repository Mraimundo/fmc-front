import React, { useState, useCallback } from 'react';
import { Button } from 'components/shared';
import CampaingForm from './CampaignForm';
import PrizeForm from './PrizeForm';
import BudgetForm from './BudgetForm';
import ProductForm from './ProductForm';

import { useRegisterForm } from '../Context';

import { Container } from './styles';

const Form: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { handleAction } = useRegisterForm();

  const handleButtonClick = useCallback(async () => {
    setLoading(true);
    await handleAction();
    setLoading(false);
  }, [handleAction]);

  return (
    <Container>
      <CampaingForm />
      <PrizeForm />
      <BudgetForm />
      <ProductForm />
      <Button
        type="button"
        buttonRole="primary"
        onClick={handleButtonClick}
        loading={loading}
      >
        Enviar
      </Button>
    </Container>
  );
};

export default Form;
