import React, { useCallback, useEffect, useState } from 'react';

import { Participant, Harvest } from 'services/auth/interfaces/Participant';
import { PROFILES } from 'config/constants';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
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
    setSelectedFarmerRequestId,
    showFarmerDetailActions,
  } = useFarmersContext();
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.personalData);
  const [selectedParticipant] = useState<Participant>({
    establishment: { id: 1, team_receives_points: false },
    role: { id: 26, identifier: 'produtor', name: 'Produtor' },
    campaign_id: 1,
    profile: PROFILES.producer,
    producer_group_name: 'GRUPO TESTE',
    name: 'Juca Cipó',
    picture: '',
    // 'https://storage.vendavall.com.br/avatar/1607344368.5fce20f026bec2.30753458.jpg',
    members_group: [
      {
        city: 'Santo Ant\u00f4nio da Platina',
        cpf_cnpj: '59.362.065/0001-20',
        ie: '2415834490',
        name: 'Fazenda do Arrai\u00e1',
        type: 'fazenda',
        uf: 'PR',
      },
      {
        city: 'Santo Ant\u00f4nio da Platina',
        cpf_cnpj: '269.375.670-73',
        ie: '',
        name: 'Juca Cip\u00f3',
        type: 'socio',
        uf: 'PR',
      },
    ],
    harvest: {
      id: 286,
      participant_id: 2609,
      soja: '25',
      milho: '5',
      arroz_irrigado: '0',
      feijao: '0',
      cana: '0',
      algodao: '0',
      cafe: '0',
      citrus: '0',
      batata: '0',
      tomate: '0',
      cevada: '0',
      cenoura: '0',
      mandioca: '0',
      uva: '0',
      melao: '0',
      tabaco: '0',
      trigo: '12',
      outras_quais: 'Aveia',
      outras: '10',
      created: '2021-02-17T09:03:42-03:00',
      modified: '2021-02-17T09:03:42-03:00',
      arroz: null,
    } as Harvest,
  } as Participant);

  const approveClickHandler = useCallback(() => {
    setSelectedFarmerRequestId(0);
    setApprovalModalIsOpen(true);
  }, [setApprovalModalIsOpen, setSelectedFarmerRequestId]);

  const reproveClickHandler = useCallback(() => {
    setSelectedFarmerRequestId(0);
    setReprovalModalIsOpen(true);
  }, [setReprovalModalIsOpen, setSelectedFarmerRequestId]);

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
          <PersonalData participant={selectedParticipant} inputRole="primary" />
        )}
        {selectedTab === Tab.farmData && (
          <FarmData participant={selectedParticipant} />
        )}
        {selectedTab === Tab.harvestData && (
          <HarvestData participant={selectedParticipant} />
        )}
      </Container>
    </Modal>
  );
};

export default FarmerDetailsModal;
