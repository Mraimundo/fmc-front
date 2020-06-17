import React, { useEffect } from 'react';
import ModalRegulations from 'components/Regulation/ModalAllRegulations';
import { useAuth } from 'context/AuthContext';

const Dashboard: React.FC = ({ children }) => {
  const { participant } = useAuth();

  useEffect(() => {
    console.log(participant);
  }, [participant]);

  return (
    <>
      {children}
      <ModalRegulations
        isOpen={false}
        onRequestClose={() => {
          console.log('oi');
        }}
      />
    </>
  );
};

export default Dashboard;
