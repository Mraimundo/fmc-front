import React, { useMemo } from 'react';

import {
  Subsidiary,
  Role,
} from 'state/modules/point-management/team-awards/types';
import SubsidiarySelect from '../SubsidiarySelect';
import ParticipantsFinder from '../ParticipantsFinder';
import SelectedSubsidiaries from '../SelectedSubsidiaries';
import RolesList from '../RolesList';
import {
  Wrapper,
  SubsidiariesParticipantWrapper,
  SubsidiariesWrapper,
  RolesListWrapper,
} from './styles';

type Props = {
  subsidiaries: Subsidiary[] | null;
  selectedSubsidiaries: number[] | null;
  selectedSubsidiariesWithName: Subsidiary[] | null;
  roles: Role[] | null;
  isFetchingRoles: boolean;
  selectedRoles: number[] | null;
  handleSelectSubsidiary: (id: number) => void;
  handleSelectRole: (id?: number) => void;
  handleChangeParticipantsFinder: (term: string) => void;
};
const FilterFields: React.FC<Props> = ({
  subsidiaries,
  selectedSubsidiaries,
  selectedSubsidiariesWithName,
  roles,
  isFetchingRoles = false,
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
        isFetchingRoles={isFetchingRoles}
      />
    ),
    [roles, selectedRoles, handleSelectRole, isFetchingRoles],
  );

  const selectedSubsidiariesList = useMemo(
    () => (
      <SelectedSubsidiaries
        subsidiaries={selectedSubsidiariesWithName}
        onRemove={handleSelectSubsidiary}
      />
    ),
    [selectedSubsidiariesWithName, handleSelectSubsidiary],
  );

  return (
    <Wrapper>
      <SubsidiariesParticipantWrapper>
        <SubsidiariesWrapper>
          {subsidiarySelect}
          {selectedSubsidiariesList}
        </SubsidiariesWrapper>
        {participantsFinder}
      </SubsidiariesParticipantWrapper>
      <RolesListWrapper>{rolesList}</RolesListWrapper>
    </Wrapper>
  );
};

export default FilterFields;
