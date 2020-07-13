import React from 'react';

import {
  ParticipantsList as TParticipantsList,
  Participant,
  ScoredParticipant,
} from 'state/modules/point-management/team-awards/types';
import {
  getParticipantScore,
  isSelectedParticipant,
} from 'state/modules/point-management/team-awards/utils';
import { Checkbox } from 'components/PointManagement';
import ParticipantWidgetDistribution from '../ParticipantWidgetDistribution';

import { TitleSeparatorWrapper, RoleTitle, List } from './styles';

type Props = {
  participants?: TParticipantsList | null;
  handleScoreParticipant(participant: Participant, points: string): void;
  handleSelectAllRole(id: string): void;
  scoredParticipants: ScoredParticipant[] | null;
  selectedRolesAll: string[] | null;
  selectedParticipants: number[] | null;
};

const ParticipantsList: React.FC<Props> = ({
  participants = null,
  handleScoreParticipant,
  handleSelectAllRole,
  scoredParticipants,
  selectedRolesAll,
  selectedParticipants,
}) => {
  return (
    <div>
      {!!participants &&
        Object.keys(participants).map((role: string) => {
          const totalMembers = participants[role].total;
          const totalMembersText =
            totalMembers > 1 ? `${totalMembers} membros` : `1 membro`;

          return (
            <div key={role}>
              <TitleSeparatorWrapper>
                <RoleTitle>
                  {role} ({totalMembersText})
                </RoleTitle>
                <Checkbox
                  checked={
                    selectedRolesAll ? selectedRolesAll.includes(role) : false
                  }
                  onChange={() => handleSelectAllRole(role)}
                  label="Marcos Todos"
                />
              </TitleSeparatorWrapper>
              <List>
                {participants[role].list.map((participant: Participant) => {
                  const score = getParticipantScore(
                    scoredParticipants,
                    participant.id,
                  );

                  const onScoreParticipant = (points: string) =>
                    handleScoreParticipant(participant, points);

                  const isSelected = isSelectedParticipant(
                    selectedParticipants,
                    participant.id,
                  );

                  return (
                    <ParticipantWidgetDistribution
                      key={participant.name}
                      name={participant.name}
                      picture={participant.picture}
                      score={score}
                      onScoreParticipant={onScoreParticipant}
                      isSelected={isSelected}
                    />
                  );
                })}
              </List>
            </div>
          );
        })}
    </div>
  );
};

export default ParticipantsList;
