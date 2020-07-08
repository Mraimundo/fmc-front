import React, { useMemo } from 'react';

import {
  Subsidiary,
  Role,
} from 'state/modules/point-management/team-awards/types';
import SubsidiarySelect from '../SubsidiarySelect';
import ParticipantsFinder from '../ParticipantsFinder';
import RolesList from '../RolesList';

type Props = {
  subsidiaries: Subsidiary[] | null;
  selectedSubsidiaries: number[] | null;
  selectedSubsidiariesWithName: Subsidiary[] | null;
  roles: Role[] | null;
  selectedRoles: number[] | null;
  handleSelectSubsidiary: (ids: number[]) => void;
  handleSelectRole: (id: number) => void;
  handleChangeParticipantsFinder: (term: string) => void;
};
const FilterFields: React.FC<Props> = ({
  subsidiaries,
  selectedSubsidiaries,
  selectedSubsidiariesWithName,
  roles,
  selectedRoles,
  handleSelectSubsidiary,
  handleSelectRole,
  handleChangeParticipantsFinder,
}) => {
  const subsidiarySelect = useMemo(
    () => (
      <SubsidiarySelect
        subsidiaries={subsidiaries}
        selectedSubsidiaries={selectedSubsidiaries}
        onSelect={handleSelectSubsidiary}
      />
    ),
    [subsidiaries, selectedSubsidiaries, handleSelectSubsidiary],
  );

  const participantsFinder = useMemo(
    () => <ParticipantsFinder onChange={handleChangeParticipantsFinder} />,
    [handleChangeParticipantsFinder],
  );

  const rolesList = useMemo(
    () => (
      <RolesList
        roles={roles}
        selectedRoles={selectedRoles}
        onSelect={handleSelectRole}
      />
    ),
    [roles, selectedRoles, handleSelectRole],
  );

  return (
    <div>
      <div>
        <div>
          {subsidiarySelect}
          <ul>
            {!!selectedSubsidiariesWithName &&
              selectedSubsidiariesWithName.map((sub: Subsidiary) => (
                <li>{sub.label}</li>
              ))}
          </ul>
        </div>
        {participantsFinder}
      </div>
      <div>{rolesList}</div>
    </div>
  );
};

export default FilterFields;
