import React, { useState } from 'react';
import { Option } from 'components/shared/Select';
import DatePicker from 'components/shared/DatePicker';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import {
  Container,
  ProductsSelect,
  CategoriesProductsSelect,
  ProductDetails,
} from './styles';

const CampaignForm: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [productSelected, setProductSelected] = useState<Option | null>(null);

  return (
    <Container>
      <h4>Produtos</h4>
      <CategoriesProductsSelect
        setValue={value => setCategorySelected(value)}
        value={categorySelected}
        placeholder="Categoria"
      />
      <ProductsSelect
        setValue={value => setProductSelected(value)}
        value={productSelected}
        placeholder="Selecionar produtos"
      />
      <ProductDetails>
        <div>
          <h3>Nome do produto</h3>
          <ReactSVG src={deleteIcon} />
        </div>
        <h5>Volume previsto</h5>
        <input type="text" />
      </ProductDetails>

      <ProductDetails>
        <div>
          <h3>Nome do produto</h3>
          <ReactSVG src={deleteIcon} />
        </div>
        <h5>Volume previsto</h5>
        <input type="text" />
      </ProductDetails>

      <ProductDetails>
        <div>
          <h3>Nome do produto</h3>
          <ReactSVG src={deleteIcon} />
        </div>
        <h5>Volume previsto</h5>
        <input type="text" />
      </ProductDetails>
    </Container>
  );
};

export default CampaignForm;
