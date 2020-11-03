import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import { Container, ProductBox, CustomDataBox, CustomInputBox } from './styles';

const Tr: React.FC = () => {
  return (
    <Container>
      <td>
        <Checkbox color="default" />
      </td>
      <td>
        <ProductBox>
          <span>Inseticidas</span>
          <span>Produto</span>
        </ProductBox>
      </td>
      <td>
        <CustomDataBox>
          <span>Objetivo: ---</span>
          <span>Realizado: ---</span>
        </CustomDataBox>
      </td>
      <td>
        <CustomDataBox>
          <span>Objetivo: ---</span>
          <span>Realizado: ---</span>
        </CustomDataBox>
      </td>
      <td>
        <CustomDataBox>
          <span>--- KG/L</span>
          <span>--- US$</span>
        </CustomDataBox>
      </td>
      <td>
        <CustomInputBox blocked={false}>
          <input type="text" />
        </CustomInputBox>
      </td>
      <td>
        <CustomInputBox blocked={false}>
          <input type="text" />
        </CustomInputBox>
      </td>
      <td>
        <CustomInputBox blocked>
          <input type="text" disabled />
        </CustomInputBox>
      </td>
      <td>
        <CustomInputBox blocked>
          <input type="text" disabled />
        </CustomInputBox>
      </td>
    </Container>
  );
};

export default Tr;
