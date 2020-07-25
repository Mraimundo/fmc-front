import React, { useState, useMemo, useCallback } from 'react';
import {
  CAMPAIGN_STATUS_TEXT,
  StatusText,
} from 'services/campaignsManager/interfaces/Campaign';
import { ReactSVG } from 'react-svg';
import CheckIcon from 'assets/images/campaigns/check-icon.svg';
import CanceledIcon from 'assets/images/campaigns/canceled-icon.svg';
import ClockIcon from 'assets/images/campaigns/clock-icon.svg';

import { Container } from './style';

interface Props {
  status: {
    status: StatusText;
    name: string;
  };
}

const Status: React.FC<Props> = ({ status }) => {
  const getItem = useCallback(() => {
    switch (status.status) {
      case CAMPAIGN_STATUS_TEXT.CANCELED:
        return <ReactSVG src={CanceledIcon} />;
      case CAMPAIGN_STATUS_TEXT.COMPLETED:
        return <ReactSVG src={CheckIcon} />;
      case CAMPAIGN_STATUS_TEXT.PUBLISHED:
        return <ReactSVG src={CheckIcon} />;
      case CAMPAIGN_STATUS_TEXT.ON_APPROVAL:
        return <ReactSVG src={ClockIcon} />;
      case CAMPAIGN_STATUS_TEXT.UNDER_ANALYSIS:
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
