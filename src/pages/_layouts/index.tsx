import React, { useEffect, useState } from 'react';
import ModalRegulations from 'components/Regulation/ModalAllRegulations';
import { useAuth } from 'context/AuthContext';

import { useMenu } from 'context/MenuContext';
import getPopups from 'services/popup/getPopupsFromPage';
import { Popup } from 'services/popup/interfaces';
import Pop from 'components/Popup';

import { Container } from './styles';

const Dashboard: React.FC = ({ children }) => {
  const { shouldShowRegulationsModal } = useAuth();
  const { menuSelected } = useMenu();
  const [popups, setPopups] = useState<Popup[]>([]);
  const [popOpened, setPopOpened] = useState(true);

  useEffect(() => {
    if (menuSelected) {
      getPopups(menuSelected.address).then(data => setPopups(data));
    }
  }, [menuSelected]);

  return (
    <Container>
      {children}
      {popups.map(item => (
        <Pop
          key={`popup-${item.id}`}
          popup={item}
          isOpen={popOpened && !shouldShowRegulationsModal}
          onRequestClose={() => {
            setPopOpened(false);
          }}
        />
      ))}
      <ModalRegulations isOpen={shouldShowRegulationsModal} />
    </Container>
  );
};

export default Dashboard;
