import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import getPopups from 'services/popup/getPopupsFromPage';
import { Popup as IPopup } from 'services/popup/interfaces';
import Popup from 'components/Popup';

interface PopupInterface extends IPopup {
  opened: boolean;
}

const Popups: React.FC = () => {
  const [popups, setPopups] = useState<PopupInterface[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      getPopups(pathname).then(data => {
        setPopups(data.map(item => ({ ...item, opened: true })));
      });
    }
  }, [pathname]);
  return useMemo(
    () => (
      <>
        {popups.map(item => (
          <Popup
            key={`popup-${item.id}`}
            popup={item}
            isOpen={item.opened}
            onRequestClose={() => {
              setPopups(e =>
                e.map(i => {
                  if (i.id === item.id) {
                    i.opened = false;
                  }
                  return i;
                }),
              );
            }}
          />
        ))}
      </>
    ),
    [popups],
  );
};

export default Popups;
