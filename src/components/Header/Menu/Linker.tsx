import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

import { MenuItem } from 'state/modules/header/types';
import { MenuTypes } from 'state/modules/header/constants';

interface LinkProps {
  menuItem: MenuItem;
}
const Linker: React.FC<LinkProps> = ({
  menuItem: { to, label, type, externalLink },
}) =>
  ({
    [MenuTypes.Menu]: (
      <a href={`#${label}`}>
        <span>{label}</span>
        <AiFillCaretDown />
      </a>
    ),
    [MenuTypes.Internal]: <Link to={to}>{label}</Link>,
    [MenuTypes.Link]: <a href={externalLink}>{label}</a>,
  }[type]);

export default Linker;
