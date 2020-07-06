import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from 'state/root-reducer';
import {
  getSubsidiaries,
  getSelectedSubsidiaries,
  getSelectedSubsidiariesWithName,
  getRoles,
  getSelectedRoles,
  getParticipants,
  fetchParticipantIsFetching,
} from 'state/modules/point-management/team-awards/selectors';
import {
  fetchSubsidiaries,
  fetchRoles,
  fetchParticipants,
  selectSubsidiary,
  selectRole,
  setParticipantFinder,
} from 'state/modules/point-management/team-awards/actions';
import Title from './Title';
import FilterFields from './FilterFields';
import ParticipantsList from './ParticipantsList';

const TeamAwardsTabContent: React.FC = () => {
  const [
    subsidiaries,
    selectedSubsidiaries,
    selectedSubsidiariesWithName,
    roles,
    selectedRoles,
    participants,
    isFetchingParticipant,
  ] = useSelector((state: StoreState) => [
    getSubsidiaries(state),
    getSelectedSubsidiaries(state),
    getSelectedSubsidiariesWithName(state),
    getRoles(state),
    getSelectedRoles(state),
    getParticipants(state),
    fetchParticipantIsFetching(state),
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubsidiaries());
    dispatch(fetchRoles());
    dispatch(fetchParticipants());
  }, [dispatch]);

  const handleSelectSubsidiary = useCallback(
    (ids: number[]) => dispatch(selectSubsidiary(ids)),
    [dispatch],
  );

  const handleSelectRole = useCallback(
    (id: number) => dispatch(selectRole(id)),
    [dispatch],
  );

  const handleChangeParticipantsFinder = useCallback(
    (term: string) => dispatch(setParticipantFinder(term)),
    [dispatch],
  );

  return (
    <div>
      <Title>1. Selecione filiais e cargos que deseja enviar premiação</Title>
      <FilterFields
        subsidiaries={subsidiaries}
        selectedSubsidiaries={selectedSubsidiaries}
        selectedSubsidiariesWithName={selectedSubsidiariesWithName}
        roles={roles}
        selectedRoles={selectedRoles}
        handleSelectSubsidiary={handleSelectSubsidiary}
        handleSelectRole={handleSelectRole}
        handleChangeParticipantsFinder={handleChangeParticipantsFinder}
      />
      {!isFetchingParticipant ? (
        <ParticipantsList participants={participants} />
      ) : (
        <h2>buscando participantes...</h2>
      )}
    </div>
  );
};

export default TeamAwardsTabContent;
