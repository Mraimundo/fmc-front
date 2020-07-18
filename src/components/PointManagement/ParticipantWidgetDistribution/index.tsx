import React from 'react';
import { useRifm } from 'rifm';

import { parseNumber, formatCurrency } from 'util/points';
import Avatar from 'components/Avatar';
import {
  Name,
  Subsidiary,
  Card,
  AvatarNameWrapper,
  InputWrapper,
} from './styles';

type Props = {
  picture?: string | null;
  name: string;
  onScoreParticipant(e: string): void;
  score: string;
  isSelected: boolean;
};

const ParticipantWidgetDistribution: React.FC<Props> = ({
  picture,
  name,
  onScoreParticipant,
  score,
  isSelected,
}) => {
  const participantRifm = useRifm({
    value: score,
    onChange: (value: string) => onScoreParticipant(parseNumber(value)),
    format: formatCurrency,
  });

  return (
    <Card data-testid="participant-widget-distribution" isSelected={isSelected}>
      <AvatarNameWrapper>
        <Avatar name={name} picture={picture} circleDimension={50} />
        <div>
          <Name>{name}</Name>
          <Subsidiary>Unidade abc</Subsidiary>
        </div>
      </AvatarNameWrapper>
      <InputWrapper>
        <span>Distribuir</span>
        <input
          type="tel"
          value={score ? participantRifm.value : '0'}
          onChange={participantRifm.onChange}
        />
      </InputWrapper>
    </Card>
  );
};

export default ParticipantWidgetDistribution;
