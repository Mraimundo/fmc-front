import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StoreState } from 'state/root-reducer';
import {
  getSubsidiaries,
  getSelectedSubsidiaries,
  getSelectedSubsidiariesWithName,
  getRoles,
  fetchRolesIsFetching,
  getSelectedRoles,
  getParticipants,
  getScoredParticipants,
  fetchParticipantIsFetching,
  getSelectedRolesAll,
  getSelectedParticipants,
} from 'state/modules/point-management/team-awards/selectors';
import {
  fetchSubsidiaries,
  fetchRoles,
  fetchParticipants,
  selectSubsidiary,
  selectRole,
  setParticipantFinder,
  scoreParticipant,
  setSelectedRolesAll,
} from 'state/modules/point-management/team-awards/actions';
import { Participant } from 'state/modules/point-management/team-awards/types';
import Title from './Title';
import FilterFields from './FilterFields';
import ParticipantsList from './ParticipantsList';

const TeamAwardsTabContent: React.FC = () => {
  const [
    subsidiaries,
    selectedSubsidiaries,
    selectedSubsidiariesWithName,
    roles,
    isFetchingRoles,
    selectedRoles,
    participants,
    scoredParticipants,
    isFetchingParticipant,
    selectedRolesAll,
    selectedParticipants,
  ] = useSelector((state: StoreState) => [
    getSubsidiaries(state),
    getSelectedSubsidiaries(state),
    getSelectedSubsidiariesWithName(state),
    getRoles(state),
    fetchRolesIsFetching(state),
    getSelectedRoles(state),
    getParticipants(state),
    getScoredParticipants(state),
    fetchParticipantIsFetching(state),
    getSelectedRolesAll(state),
    getSelectedParticipants(state),
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubsidiaries());
    dispatch(fetchRoles());
    dispatch(fetchParticipants());
  }, [dispatch]);

  const handleSelectSubsidiary = useCallback(
    (id: number) => dispatch(selectSubsidiary(id)),
    [dispatch],
  );

  const handleSelectRole = useCallback(
    (id?: number) => dispatch(selectRole(id)),
    [dispatch],
  );

  const handleChangeParticipantsFinder = useCallback(
    (term: string) => dispatch(setParticipantFinder(term)),
    [dispatch],
  );

  const handleScoreParticipant = useCallback(
    (participant: Participant, points: string) => {
      dispatch(scoreParticipant(participant, points));
    },
    [dispatch],
  );

  const handleSelectAllRole = useCallback(
    (role: string) => {
      dispatch(setSelectedRolesAll(role));
    },
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
        isFetchingRoles={isFetchingRoles}
        selectedRoles={selectedRoles}
        handleSelectSubsidiary={handleSelectSubsidiary}
        handleSelectRole={handleSelectRole}
        handleChangeParticipantsFinder={handleChangeParticipantsFinder}
      />
      {!isFetchingParticipant ? (
        <ParticipantsList
          participants={participants}
          scoredParticipants={scoredParticipants}
          handleScoreParticipant={handleScoreParticipant}
          handleSelectAllRole={handleSelectAllRole}
          selectedRolesAll={selectedRolesAll}
          selectedParticipants={selectedParticipants}
        />
      ) : (
        <h2>buscando participantes...</h2>
      )}
    </div>
  );
};

export default TeamAwardsTabContent;
