import React from 'react';

import {
  ParticipantsList as TParticipantsList,
  Participant,
  ScoredParticipant,
  WaitingScoredParticipant,
} from 'state/modules/point-management/team-awards/types';
import {
  getParticipantScore,
  isSelectedParticipant,
  isScoredParticipant,
} from 'state/modules/point-management/team-awards/utils';
import { Checkbox } from 'components/PointManagement';
import ParticipantWidgetDistribution from '../ParticipantWidgetDistribution';

import {
  TitleSeparatorWrapper,
  RoleTitle,
  List,
  ParticipantsEmpty,
} from './styles';

type Props = {
  participants?: TParticipantsList | null;
  handleScoreParticipant(participant: Participant, points: number): void;
  handleSelectAllRole(id: string): void;
  handleToggleParticipant(participantId: number): void;
  scoredParticipants: ScoredParticipant[] | null;
  waitingScoredParticipants: WaitingScoredParticipant[] | null;
  selectedRolesAll: string[] | null;
  selectedParticipants: number[] | null;
};

const ParticipantsList: React.FC<Props> = ({
  participants = null,
  handleScoreParticipant,
  handleSelectAllRole,
  handleToggleParticipant,
  scoredParticipants,
  waitingScoredParticipants,
  selectedRolesAll,
  selectedParticipants,
}) => (
  <div>
    {!!participants ? (
      Object.keys(participants).map((role: string) => {
        const totalMembers = participants[role].count;
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
                label="Marcar Todos"
              />
            </TitleSeparatorWrapper>
            <List>
              {participants[role].list.map((participant: Participant) => {
                const score = getParticipantScore(
                  waitingScoredParticipants,
                  scoredParticipants,
                  participant.id,
                );

                const onScoreParticipant = (points: number) =>
                  handleScoreParticipant(participant, points);

                const onToggleParticipant = (participantId: number) =>
                  handleToggleParticipant(participantId);

                const isSelected = isSelectedParticipant(
                  selectedParticipants,
                  participant.id,
                );

                const isAllowedToScore = isScoredParticipant(scoredParticipants, participant.id);

                return (
                  <ParticipantWidgetDistribution
                    key={participant.name}
                    participant={participant}
                    score={score}
                    onScoreParticipant={onScoreParticipant}
                    isSelected={isSelected}
                    onToggleParticipant={onToggleParticipant}
                    isAllowedToScore={!isAllowedToScore}
                  />
                );
              })}
            </List>
          </div>
        );
      })
    ) : (
      <ParticipantsEmpty>Não foram encontrados participantes</ParticipantsEmpty>
    )}
  </div>
);

export default ParticipantsList;
