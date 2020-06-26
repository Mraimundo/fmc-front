import React from 'react';
import ModalRegulations from 'components/Regulation/ModalAllRegulations';
import { useAuth } from 'context/AuthContext';

import { Container, Logo } from './styles';

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal } = useAuth();

  return (
    <Container>
      <Logo />
      {children}
      <ModalRegulations isOpen={shouldShowRegulationsModal} />
    </Container>
  );
};

export default Dashboard;
