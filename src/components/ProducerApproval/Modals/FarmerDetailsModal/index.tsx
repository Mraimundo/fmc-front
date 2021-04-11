import React, { useEffect, useState } from 'react';

import { Participant } from 'services/auth/interfaces/Participant';
import { PROFILES } from 'config/constants';
import { Container, Modal } from './styles';
import CloseButton from '../shared/CloseButton';
import PersonalData from './PersonalData';
import FarmData from './FarmData';
import Harvest from './HarvestData';
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
  const [selectedTab, setSelectedTab] = useState<Tab>(Tab.personalData);
  const [selectedParticipant, setSelectedParticipant] = useState<Participant>({
    establishment: { id: 1, team_receives_points: false },
    role: { id: 26, identifier: 'produtor', name: 'Produtor' },
    campaign_id: 1,
    profile: PROFILES.producer,
  } as Participant);
  useEffect(() => {
    const participant = {
      establishment: { id: 1, team_receives_points: false },
      role: { id: 26, identifier: 'produtor', name: 'Produtor' },
      campaign_id: 1,
      profile: PROFILES.producer,
    } as Participant;
    setSelectedParticipant(participant);
  }, []);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <CloseButton onClickHandler={onRequestClose} />
      <div>
        <button type="button" onClick={() => setSelectedTab(Tab.personalData)}>
          Personal
        </button>
        <button type="button" onClick={() => setSelectedTab(Tab.farmData)}>
          Farm
        </button>
        <button type="button" onClick={() => setSelectedTab(Tab.harvestData)}>
          Harvest
        </button>
      </div>
      <Container>
        {selectedTab === Tab.personalData && (
          <PersonalData participant={selectedParticipant} inputRole="primary" />
        )}
        {selectedTab === Tab.farmData && <FarmData />}
        {selectedTab === Tab.harvestData && <HarvestData />}
      </Container>
    </Modal>
  );
};

export default FarmerDetailsModal;
