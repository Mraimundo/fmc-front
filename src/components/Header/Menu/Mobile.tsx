import React from 'react';
import isEmpty from 'lodash.isempty';
import { Link } from 'react-router-dom';

import routesMap from 'routes/route-map';
import { MenuItem as TMenuItem } from 'state/modules/header/types';
import Linker from './Linker';
import { MobileMenuList, MobileMenuItem } from './Mobile.styles';

interface MenuProps {
  items: TMenuItem[];
  subMenu?: boolean;
  signOut?: () => void;
  simulating: boolean;
}
const MobileMenu: React.FC<MenuProps> = ({
  items,
  subMenu = false,
  signOut = () => null,
  simulating,
}) => {
  return (
    <MobileMenuList subMenu={subMenu}>
      {items.map((item: TMenuItem) => (
        <MobileMenuItem key={item.label}>
          <Linker
            menuItem={item}
            subMenu={subMenu && !isEmpty(item.children)}
          />
          {!isEmpty(item.children) && (
            <MobileMenu
              items={item.children || []}
              subMenu
              simulating={simulating}
            />
          )}
        </MobileMenuItem>
      ))}
      {!subMenu && (
        <>
          <MobileMenuItem>
            <Link to={routesMap.faq}>FAQ</Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link to={routesMap.contact}>FALE CONOSCO</Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <Link to={simulating ? '/home' : routesMap.profile}>
              MEU PERFIL
            </Link>
          </MobileMenuItem>
          <MobileMenuItem>
            <a href="/" onClick={signOut}>
              SAIR
            </a>
          </MobileMenuItem>
        </>
      )}
    </MobileMenuList>
  );
};

export default MobileMenu;
