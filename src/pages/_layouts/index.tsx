import React, { useEffect, useState } from 'react';
import { useMenu } from 'context/MenuContext';
import getPopups from 'services/popup/getPopupsFromPage';
import { Popup } from 'services/popup/interfaces';
import Pop from 'components/Popup';

const Dashboard: React.FC = ({ children }) => {
  const { menuSelected } = useMenu();
  const [popups, setPopups] = useState<Popup[]>([]);

  useEffect(() => {
    if (menuSelected) {
      getPopups(menuSelected.address).then(data => setPopups(data));
    }
  }, [menuSelected]);

  const [popOpened, setPopOpened] = useState(true);

  return (
    <>
      {children}
      {popups.map(item => (
        <Pop
          key={`popup-${item.id}`}
          popup={item}
          isOpen={popOpened}
          onRequestClose={() => {
            setPopOpened(false);
          }}
        />
      ))}
    </>
  );
};

export default Dashboard;
