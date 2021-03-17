import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-grid-system';
import { Tab, TabPanel } from 'react-tabs';

import { useToast } from 'context/ToastContext';
import {
  fetchEstablishments,
  setSelectedEstablishment,
  distributePointsFinally,
  setDistributionWithSavedSettings,
} from 'state/modules/point-management/common/actions';
import * as selectors from 'state/modules/point-management/common/selectors';
import {
  getIsOpenModalMissingParticipants,
  getMissingParticipants,
} from 'state/modules/point-management/team-awards/selectors';
import { toggleIsOpenModalMissingParticipants } from 'state/modules/point-management/team-awards/actions';
import { Establishment } from 'state/modules/point-management/common/types';
import {
  Header,
  ResaleCooperativePointsTabContent,
  TeamAwardsTabContent,
  ResumeDistribution,
  EstablishmentSelection,
} from 'components/PointManagement';
import ModalMissingParticipants from 'components/PointManagement/ModalMissingParticipants';
import { FinishedDistributionPossibilities } from 'state/modules/point-management/common/constants';
import history from 'services/history';
import {
  Wrapper,
  Panel,
  List,
  Tabs,
  TeamAwardsWrapper,
  TeamAwardsResumeWrapper,
  Row,
  ResumeCol,
  ParticipantsCol,
} from './styles';

const PointManagement: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [
    isReadyToDistribute,
    selectedEstablishment,
    establishments,
    isResaleCooperativePointsOnly,
    fetchPointsToDistribute,
    distributePoints,
    finishedDistribution,
    totalPointsResaleCooperative,
    totalPointsTeamAwards,
    isOpenModalMissingParticipants,
    missingParticipants,
    pointsToDistribute,
    hasSavedSettings,
  ] = [
    useSelector(selectors.getIsReadyToDistribute),
    useSelector(selectors.getSelectedEstablishment),
    useSelector(selectors.getEstablishments),
    useSelector(selectors.getIsResaleCooperativePointsOnly),
    useSelector(selectors.getFetchPointsToDistribute),
    useSelector(selectors.getDistributePoints),
    useSelector(selectors.getFinishedDistribution),
    useSelector(selectors.getTotalPointsResaleCooperative),
    useSelector(selectors.getTotalPointsTeamAwards),
    useSelector(getIsOpenModalMissingParticipants),
    useSelector(getMissingParticipants),
    useSelector(selectors.getPointsToDistribute),
    useSelector(selectors.getHasSavedSetting),
  ];

  const dispatch = useDispatch();
  const { addToast } = useToast();

  const { error } = fetchPointsToDistribute;
  const { error: errorOnDistribute } = distributePoints;

  useEffect(() => {
    if (error) addToast({ title: error, type: 'info' });
  }, [error, addToast]);

  useEffect(() => {
    if (errorOnDistribute) addToast({ title: errorOnDistribute, type: 'info' });
  }, [errorOnDistribute, addToast]);

  useEffect(() => {
    if (finishedDistribution) {
      addToast({
        title: 'Parabéns, você finalizou a distribuição de pontos!',
        type: 'success',
      });

      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [finishedDistribution, addToast]);

  useEffect(() => {
    dispatch(fetchEstablishments());
  }, [dispatch]);

  useEffect(() => {
    if (hasSavedSettings) {
      dispatch(setDistributionWithSavedSettings());
    }
  }, [dispatch, hasSavedSettings]);

  const handleChangeEstablishment = useCallback(
    (establishment: Establishment) => {
      dispatch(setSelectedEstablishment(establishment));
    },
    [dispatch],
  );

  const handleCloseMissingModal = useCallback(() => {
    dispatch(toggleIsOpenModalMissingParticipants());
  }, [dispatch]);

  const handleDistributePoints = useCallback(() => {
    const { allowPartialDistribution } = pointsToDistribute;

    const { Ta, All } = FinishedDistributionPossibilities;

    dispatch(distributePointsFinally(allowPartialDistribution ? Ta : All));
    dispatch(toggleIsOpenModalMissingParticipants());
  }, [dispatch, pointsToDistribute]);

  const handleTabSelect = useCallback((index: number) => {
    setTabIndex(index);
  }, []);

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Wrapper>
        {!!establishments && establishments.length > 1 && (
          <EstablishmentSelection
            establishments={establishments}
            onChange={handleChangeEstablishment}
            selectedEstablishment={selectedEstablishment}
          />
        )}
        {!!selectedEstablishment && (
          <Header establishmentType={selectedEstablishment.type} />
        )}
        {isReadyToDistribute && (
          <Tabs
            defaultIndex={!totalPointsResaleCooperative ? 1 : 0}
            selectedIndex={tabIndex}
            onSelect={handleTabSelect}
          >
            <List>
              <Tab
                disabled={!totalPointsResaleCooperative}
                disabledClassName="disabled-tab"
              >
                PONTOS {selectedEstablishment?.type || ''}
              </Tab>
              {!isResaleCooperativePointsOnly && (
                <Tab
                  disabled={!totalPointsTeamAwards}
                  disabledClassName="disabled-tab"
                >
                  PREMIAÇÃO EQUIPE
                </Tab>
              )}
            </List>

            <Panel>
              {!!selectedEstablishment && (
                <ResaleCooperativePointsTabContent
                  establishmentType={selectedEstablishment.type}
                  onClickRescue={() => handleTabSelect(1)}
                />
              )}
            </Panel>
            {!isResaleCooperativePointsOnly && (
              <TabPanel>
                <Row>
                  <ParticipantsCol>
                    <TeamAwardsWrapper>
                      <TeamAwardsTabContent />
                    </TeamAwardsWrapper>
                  </ParticipantsCol>
                  <ResumeCol>
                    <TeamAwardsResumeWrapper>
                      <ResumeDistribution />
                    </TeamAwardsResumeWrapper>
                  </ResumeCol>
                </Row>
              </TabPanel>
            )}
          </Tabs>
        )}
      </Wrapper>
      <ModalMissingParticipants
        isOpen={isOpenModalMissingParticipants}
        total={missingParticipants}
        onClose={handleCloseMissingModal}
        onConfirm={handleDistributePoints}
      />
    </Container>
  );
};

export default PointManagement;
