import React, { useState, useMemo, useCallback } from 'react';
import { StatusResponse } from 'services/campaignsManager/getCampaignStatus';
import { CAMPAIGN_STATUS } from 'services/campaignsManager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import CheckIcon from 'assets/images/campaigns/check-icon.svg';
import CanceledIcon from 'assets/images/campaigns/canceled-icon.svg';
import ClockIcon from 'assets/images/campaigns/clock-icon.svg';

import { Container } from './style';

interface Props {
  status: StatusResponse;
}

const Status: React.FC<Props> = ({ status }) => {
  const getItem = useCallback(() => {
    switch (status.id) {
      case CAMPAIGN_STATUS.CANCELED:
        return <ReactSVG src={CanceledIcon} />;
      case CAMPAIGN_STATUS.BUILDING:
        return <ReactSVG src={ClockIcon} />;
      default:
        return <ReactSVG src={CheckIcon} />;
    }
  }, [status]);

  return (
    <Container>
      {getItem()}
      <span>{status.name}</span>
    </Container>
  );
};

export default Status;
