import React from 'react';

import Avatar from 'components/Avatar';
import { Name, Card } from './styles';

type Props = {
  picture?: string | null;
  name: string;
};

const ParticipantWidgetDistribution: React.FC<Props> = ({ picture, name }) => {
  return (
    <Card data-testid="participant-widget-distribution">
      <Avatar name={name} picture={picture} />
      <div>
        <Name>{name}</Name>
        <span>Unidade abc</span>
      </div>
      <div>
        <span>Distribuir</span>
        <input type="text" />
      </div>
    </Card>
  );
};

export default ParticipantWidgetDistribution;
