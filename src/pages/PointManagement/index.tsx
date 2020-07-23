import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import { Tab, TabPanel } from 'react-tabs';

import { useToast } from 'context/ToastContext';
import {
  Header,
  ResaleCooperativePointsTabContent,
  TeamAwardsTabContent,
  ResumeDistribution,
} from 'components/PointManagement';
import EstablishmentSelection from 'components/PointManagement/EstablishmentSelection';
import {
  fetchEstablishments,
  setSelectedEstablishment,
} from 'state/modules/point-management/common/actions';
import * as selectors from 'state/modules/point-management/common/selectors';
import {
  Wrapper,
  Panel,
  List,
  Tabs,
  TeamAwardsWrapper,
  TeamAwardsResumeWrapper,
} from './styles';
import { Establishment } from 'state/modules/point-management/common/types';

const PointManagement: React.FC = () => {
  const [
    isReadyToDistribute,
    selectedEstablishment,
    establishments,
    isResaleCooperativePointsOnly,
    fetchPointsToDistribute,
  ] = [
    useSelector(selectors.getIsReadyToDistribute),
    useSelector(selectors.getSelectedEstablishment),
    useSelector(selectors.getEstablishments),
    useSelector(selectors.getIsResaleCooperativePointsOnly),
    useSelector(selectors.getFetchPointsToDistribute),
  ];

  const dispatch = useDispatch();
  const { addToast } = useToast();

  const { error } = fetchPointsToDistribute;

  useEffect(() => {
    if (error) addToast({ title: error, type: 'info' });
  }, [error]);

  useEffect(() => {
    dispatch(fetchEstablishments());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        {!!establishments && establishments.length > 1 && (
          <EstablishmentSelection
            establishments={establishments}
            onChange={(establishment: Establishment) =>
              dispatch(setSelectedEstablishment(establishment))
            }
            selectedEstablishment={selectedEstablishment}
          />
        )}
        {!!selectedEstablishment && <Header />}
        {isReadyToDistribute && (
          <Tabs>
            <List>
              <Tab>PONTOS REVENDA</Tab>
              {!isResaleCooperativePointsOnly && <Tab>PREMIAÇÃO EQUIPE</Tab>}
            </List>

            <Panel>
              <ResaleCooperativePointsTabContent />
            </Panel>
            {!isResaleCooperativePointsOnly && (
              <TabPanel>
                <Row>
                  <Col md={9}>
                    <TeamAwardsWrapper>
                      <TeamAwardsTabContent />
                    </TeamAwardsWrapper>
                  </Col>
                  <Col md={3}>
                    <TeamAwardsResumeWrapper>
                      <ResumeDistribution />
                    </TeamAwardsResumeWrapper>
                  </Col>
                </Row>
              </TabPanel>
            )}
          </Tabs>
        )}
      </Wrapper>
    </Container>
  );
};

export default PointManagement;
