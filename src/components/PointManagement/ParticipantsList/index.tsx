import React from 'react';

import {
  ParticipantsList as TParticipantsList,
  Participant,
} from 'state/modules/point-management/team-awards/types';
import ParticipantWidgetDistribution from '../ParticipantWidgetDistribution';

type Props = {
  participants?: TParticipantsList | null;
};

const ParticipantsList: React.FC<Props> = ({ participants = null }) => {
  return (
    <div>
      {!!participants &&
        Object.keys(participants).map((role: string) => (
          <div key={role}>
            <h2>
              {role} ({participants[role].total} membros)
            </h2>
            <ul>
              {participants[role].list.map((participant: Participant) => (
                <ParticipantWidgetDistribution
                  name={participant.name}
                  picture={participant.picture}
                />
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ParticipantsList;
