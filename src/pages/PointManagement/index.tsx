import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-grid-system';
import { Tab, TabPanel } from 'react-tabs';

import { useToast } from 'context/ToastContext';
import {
  fetchEstablishments,
  setSelectedEstablishment,
  distributePointsFinally,
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
    if (finishedDistribution)
      addToast({
        title: 'Parabéns, você finalizou a distribuição de pontos!',
        type: 'success',
      });
  }, [finishedDistribution, addToast]);

  useEffect(() => {
    dispatch(fetchEstablishments());
  }, [dispatch]);

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
    dispatch(distributePointsFinally());
    dispatch(toggleIsOpenModalMissingParticipants());
  }, [dispatch]);

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
          <Tabs defaultIndex={!totalPointsResaleCooperative ? 1 : 0}>
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
              <ResaleCooperativePointsTabContent
                establishmentType={selectedEstablishment?.type || ''}
              />
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
