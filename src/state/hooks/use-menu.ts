import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { getMenu } from 'state/modules/header/selectors';
import { getMenuByUrl } from 'state/modules/header/utils';
import { MenuItem } from 'state/modules/header/types';

const useMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const { url } = useRouteMatch();
  const menu = useSelector(getMenu);

  useEffect(() => {
    const currentMenu = getMenuByUrl(url, menu);
    setSelectedMenu(currentMenu);

    return () => {
      setSelectedMenu(null);
    };
  }, [url, menu]);

  return { selectedMenu, menu };
};

export default useMenu;
