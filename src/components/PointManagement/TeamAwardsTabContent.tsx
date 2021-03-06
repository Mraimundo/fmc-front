import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useToast } from 'context/ToastContext';
import { StoreState } from 'state/root-reducer';
import * as selectors from 'state/modules/point-management/team-awards/selectors';
import * as actions from 'state/modules/point-management/team-awards/actions';
import { Participant } from 'state/modules/point-management/team-awards/types';
import {
  Loader,
  Title,
  FilterFields,
  ParticipantsList,
} from 'components/PointManagement';

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
    waitingScoredParticipants,
    isFetchingParticipant,
    selectedRolesAll,
    selectedParticipants,
    assignPoints,
  ] = useSelector((state: StoreState) => [
    selectors.getSubsidiaries(state),
    selectors.getSelectedSubsidiaries(state),
    selectors.getSelectedSubsidiariesWithName(state),
    selectors.getRoles(state),
    selectors.fetchRolesIsFetching(state),
    selectors.getSelectedRoles(state),
    selectors.getParticipantsList(state),
    selectors.getScoredParticipants(state),
    selectors.getWaitingScoredParticipants(state),
    selectors.fetchParticipantIsFetching(state),
    selectors.getSelectedRolesAll(state),
    selectors.getSelectedParticipants(state),
    selectors.getAssignPoints(state),
  ]);

  const { addToast } = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchSubsidiaries());
    dispatch(actions.fetchRoles());
    dispatch(actions.fetchParticipants());
  }, [dispatch]);

  const handleSelectSubsidiary = useCallback(
    (id: number) => dispatch(actions.selectSubsidiary(id)),
    [dispatch],
  );

  const handleSelectRole = useCallback(
    (id?: number) => dispatch(actions.selectRole(id)),
    [dispatch],
  );

  const handleChangeParticipantsFinder = useCallback(
    (term: string) => dispatch(actions.setParticipantFinder(term)),
    [dispatch],
  );

  const handleScoreParticipant = useCallback(
    (participant: Participant, points: number) => {
      const scored =
        !!scoredParticipants &&
        scoredParticipants.find(({ id }) => id === participant.id);

      if (scored) return;

      dispatch(actions.scoreParticipant(participant, points));
    },
    [dispatch, scoredParticipants],
  );

  const handleSelectAllRole = useCallback(
    (role: string) => {
      dispatch(actions.setSelectedRolesAll(role));
    },
    [dispatch],
  );

  const handleToggleParticipant = useCallback(
    (participantId: number) => {
      dispatch(actions.toggleSelectedParticipant(participantId));
    },
    [dispatch],
  );

  const { error } = assignPoints;
  useEffect(() => {
    if (error) addToast({ title: error, type: 'info' });
  }, [error, addToast]);

  return (
    <>
      <Title>1. Selecione filiais e cargos que deseja enviar premia????o</Title>
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
          waitingScoredParticipants={waitingScoredParticipants}
          handleScoreParticipant={handleScoreParticipant}
          handleSelectAllRole={handleSelectAllRole}
          selectedRolesAll={selectedRolesAll}
          selectedParticipants={selectedParticipants}
          handleToggleParticipant={handleToggleParticipant}
        />
      ) : (
        <Loader>buscando participantes...</Loader>
      )}
    </>
  );
};

export default TeamAwardsTabContent;
