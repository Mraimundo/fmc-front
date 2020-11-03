import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <tr>
        <td>1</td>
        <td>
          <span>Inseticidas</span>
          <span>Produto</span>
        </td>
        <td>
          <span>Objetivo: ---</span>
          <span>Realizado: ---</span>
        </td>
        <td>
          <span>Objetivo: ---</span>
          <span>Realizado: ---</span>
        </td>
        <td>
          <span>--- KG/L</span>
          <span>--- US$</span>
        </td>
        <td>
          <input type="text" />
        </td>
        <td>
          <input type="text" />
        </td>
        <td>
          <input type="text" />
        </td>
        <td>
          <input type="text" />
        </td>
      </tr>
    </Container>
  );
};

export default Header;
