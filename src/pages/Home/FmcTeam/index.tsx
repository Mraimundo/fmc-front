import React from 'react';
import { useAuth } from 'context/AuthContext';

import { ApproverProfile, DM, RTC, KAM } from 'config/constants';

import Default from './Default';
import RtcKamDm from './RtcKamDm';

const FmcTeam: React.FC = () => {
  const { participant } = useAuth();

  const rtcDmKamProfiles: ApproverProfile[] = [DM, RTC, KAM];

  if (rtcDmKamProfiles.includes(participant.profile_value)) {
    return <RtcKamDm />;
  }

  return <Default />;
};

export default FmcTeam;
