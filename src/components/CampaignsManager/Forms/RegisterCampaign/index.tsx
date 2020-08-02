import React, { useState, useCallback } from 'react';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { useSelector } from 'react-redux';
import { getCampaign } from 'state/modules/campaigns-manager/selectors';
import { Button } from 'components/shared';
import CampaingForm from './CampaignForm';
import PrizeForm from './PrizeForm';
import BudgetForm from './BudgetForm';
import ProductForm from './ProductForm';

import { Container } from './styles';

interface Props {
  handleAction(campaign: Campaign): Promise<void>;
  actionButtonName?: string;
}
const Register: React.FC<Props> = ({
  handleAction,
  actionButtonName = 'Enviar',
}) => {
  const [loading, setLoading] = useState(false);
  const campaign = useSelector(getCampaign);

  const handleButtonClick = useCallback(async () => {
    setLoading(true);
    await handleAction(campaign);
    setLoading(false);
  }, [handleAction, campaign]);

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
        {actionButtonName}
      </Button>
    </Container>
  );
};

export default Register;
