import React, { useEffect, useState } from 'react';

import { TScoredParticipantResume } from 'state/modules/point-management/team-awards/selectors';
import { formatPoints } from 'util/points';

import { List, RoleName, RoleItem, TotalResume } from './styles';

type Props = {
  scoredParticipants: TScoredParticipantResume;
};
const ResumeWidget: React.FC<Props> = ({ scoredParticipants }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalResumePoints = Object.values(scoredParticipants).reduce(
      (acc: any, { totalPoints }: any) => acc + totalPoints,
      0,
    );

    setTotal(totalResumePoints);
  }, [scoredParticipants]);

  return (
    <List>
      <>
        {Object.keys(scoredParticipants).map((role: string) => {
          const { count, totalPoints } = scoredParticipants[role];
          const scoredParticipantsText =
            count > 1
              ? `${count} pessoas contempladas`
              : '1 pessoa contemplada';

          return (
            <RoleItem key={`${role}-${count}`}>
              <RoleName>{role}</RoleName>
              <div>
                <span>{scoredParticipantsText}</span>
                <span>{formatPoints(totalPoints)}</span>
              </div>
            </RoleItem>
          );
        })}
        <TotalResume>
          <span>Total distribuído</span>
          <span>{formatPoints(total)}</span>
        </TotalResume>
      </>
    </List>
  );
};

export default ResumeWidget;
