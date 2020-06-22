import React from 'react';
import ModalRegulations from 'components/Regulation/ModalAllRegulations';
import { useAuth } from 'context/AuthContext';

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal } = useAuth();

  return (
    <>
      {children}
      <ModalRegulations isOpen={shouldShowRegulationsModal} />
    </>
  );
};

export default Dashboard;
