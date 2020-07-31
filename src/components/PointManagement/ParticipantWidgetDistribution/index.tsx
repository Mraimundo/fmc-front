import React, { useMemo } from 'react';

import { Tooltip } from 'components/shared';
import Avatar from 'components/Avatar';
import { PointsInput } from 'components/PointManagement';
import { Participant } from 'state/modules/point-management/team-awards/types';
import { getFirstAndLastName, limitChars } from 'util/string';
import {
  Name,
  Subsidiary,
  Card,
  AvatarNameWrapper,
  InputWrapper,
  InputPoints,
  SelectIcon,
  SelectedIcon,
} from './styles';

interface ParticipantWidgetDistributionProps {
  participant: Participant;
  onScoreParticipant(e: number): void;
  score: number;
  isSelected: boolean;
  onToggleParticipant(e: number): void;
  isAllowedToScore: boolean;
}
const ParticipantWidgetDistribution: React.FC<ParticipantWidgetDistributionProps> = ({
  participant: { id, picture, name, subsidiary },
  onScoreParticipant,
  score,
  isSelected,
  onToggleParticipant,
  isAllowedToScore = true,
}) => {
  const selectIcon = useMemo(
    () =>
      isSelected ? (
        <Tooltip title="Desmarcar participante" type="primary">
          <SelectedIcon onClick={() => onToggleParticipant(id)} />
        </Tooltip>
      ) : (
        <Tooltip title="Marcar participante" type="primary">
          <SelectIcon onClick={() => onToggleParticipant(id)} />
        </Tooltip>
      ),
    [isSelected, onToggleParticipant, id],
  );

  return (
    <Card data-testid="participant-widget-distribution" isSelected={isSelected}>
      <AvatarNameWrapper>
        <Avatar name={name} picture={picture} circleDimension={50} />
        <div>
          <Name>{getFirstAndLastName(name)}</Name>
          <Tooltip title={subsidiary} type="primary">
            <Subsidiary>{limitChars(subsidiary, 25)}</Subsidiary>
          </Tooltip>
        </div>
      </AvatarNameWrapper>
      <InputWrapper>
        <span>Distribuir</span>
        <PointsInput
          value={score}
          onChange={(points: number) => onScoreParticipant(points)}
          component={InputPoints}
          disabled={!isAllowedToScore}
        />
      </InputWrapper>
      {isAllowedToScore && selectIcon}
    </Card>
  );
};

export default ParticipantWidgetDistribution;
