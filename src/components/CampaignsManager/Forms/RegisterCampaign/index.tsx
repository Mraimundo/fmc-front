import React, { useState, useCallback } from 'react';
import { ApproverProfile } from 'config/constants';
import { Campaign } from 'services/campaigns-manager/interfaces/Campaign';
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
  myProfile: ApproverProfile;
}
const Register: React.FC<Props> = ({
  handleAction,
  actionButtonName = 'Enviar',
  myProfile,
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
      <CampaingForm profile={myProfile} />
      <PrizeForm />
      <BudgetForm />
      <ProductForm />
      <Button
        type="button"
        buttonRole="primary"
        onClick={handleButtonClick}
        disabled={loading}
        loading={loading}
      >
        {actionButtonName}
      </Button>
    </Container>
  );
};

export default Register;
