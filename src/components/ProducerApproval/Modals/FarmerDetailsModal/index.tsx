import React, { useCallback, useEffect, useState } from 'react';

import { Participant } from 'services/auth/interfaces/Participant';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { getFarmerData } from 'services/producer-approval';

import {
  Container,
  Modal,
  Actions,
  Button,
  Navigation,
  NavigationItem,
} from './styles';
import { Title } from './shared/styles';
import CloseButton from '../shared/CloseButton';
import PersonalData from './PersonalData';
import FarmData from './FarmData';
import HarvestData from './HarvestData';

interface FarmerDetailsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

enum Tab {
  personalData = 'personalData',
  farmData = 'farmData',
  harvestData = 'harvestData',
}

const FarmerDetailsModal: React.FC<FarmerDetailsModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const {
    setApprovalModalIsOpen,
    setReprovalModalIsOpen,
    showFarmerDetailActions,
    selectedFarmerId,
  } = useFarmersContext();
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.personalData);
  const [farmer, setFarmer] = useState<Participant | null>(null);

  const approveClickHandler = useCallback(() => {
    setApprovalModalIsOpen(true);
  }, [setApprovalModalIsOpen]);

  const reproveClickHandler = useCallback(() => {
    setReprovalModalIsOpen(true);
  }, [setReprovalModalIsOpen]);

  useEffect(() => {
    const fetchFarmer = async () => {
      if (selectedFarmerId) {
        const data = await getFarmerData(selectedFarmerId);
        setFarmer(data);
      }
    };
    setFarmer(null);
    fetchFarmer();
    setSelectedTab(Tab.personalData);
  }, [selectedFarmerId]);

  const nextHandleClick = useCallback(() => {
    const currentTab = Object.keys(Tab).indexOf(selectedTab);
    const nextTab = Object.values(Tab)[currentTab + 1];
    setSelectedTab(nextTab);
  }, [selectedTab]);

  const previousHandleClick = useCallback(() => {
    const currentTab = Object.keys(Tab).indexOf(selectedTab);
    const nextTab = Object.values(Tab)[currentTab - 1];
    setSelectedTab(nextTab);
  }, [selectedTab]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} zIndex={1}>
      <CloseButton onClickHandler={onRequestClose} />
      <Container>
        <Title>Dados do Perfil</Title>
        {showFarmerDetailActions && (
          <Actions>
            <Button
              type="button"
              buttonRole="secondary"
              onClick={approveClickHandler}
            >
              Aprovar
            </Button>
            <Button
              type="button"
              buttonRole="quaternary"
              onClick={reproveClickHandler}
            >
              Reprovar
            </Button>
          </Actions>
        )}
        <Navigation>
          <NavigationItem
            onClick={() => setSelectedTab(Tab.personalData)}
            className={selectedTab === Tab.personalData ? 'isCurrent' : ''}
          >
            Pessoa física
          </NavigationItem>
          <NavigationItem
            onClick={() => setSelectedTab(Tab.farmData)}
            className={selectedTab === Tab.farmData ? 'isCurrent' : ''}
          >
            Dados da fazenda e/ou CNPJ
          </NavigationItem>
          <NavigationItem
            onClick={() => setSelectedTab(Tab.harvestData)}
            className={selectedTab === Tab.harvestData ? 'isCurrent' : ''}
          >
            Dados da área de cultivo
          </NavigationItem>
        </Navigation>
        {selectedTab === Tab.personalData && (
          <PersonalData participant={farmer} inputRole="primary" />
        )}
        {selectedTab === Tab.farmData && <FarmData participant={farmer} />}
        {selectedTab === Tab.harvestData && (
          <HarvestData participant={farmer} />
        )}
        <Actions>
          {selectedTab !== Tab.personalData && (
            <Button
              type="button"
              buttonRole="primary"
              onClick={previousHandleClick}
            >
              Anterior
            </Button>
          )}
          {selectedTab !== Tab.harvestData && (
            <Button
              type="button"
              buttonRole="primary"
              onClick={nextHandleClick}
            >
              Próximo
            </Button>
          )}
        </Actions>
      </Container>
    </Modal>
  );
};

export default FarmerDetailsModal;
