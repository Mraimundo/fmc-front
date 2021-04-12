import React from 'react';

import { Participant } from 'services/auth/interfaces/Participant';
import { getHarvestLabel } from '../shared/utils';
import HarvestInput from '../shared/HarvestInput';

interface HarvestDataProps {
  participant: Participant;
}

const HarvestData: React.FC<HarvestDataProps> = ({ participant }) => {
  const items = [] as any[];

  Object.entries(participant.harvest).forEach(([key, value]) => {
    const label = getHarvestLabel(key);

    if (label) {
      items.push(
        <HarvestInput key={key} name={key} title={label} value={value} />,
      );
    }
  });

  return (
    <div style={{ display: 'block' }}>
      {items}
      <HarvestInput
        key="outras"
        name="outras"
        value={participant.harvest.outras}
        title={`${participant.harvest.outras_quais} (Outras)`}
      />
    </div>
  );
};

export default HarvestData;
