import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import DatePicker from 'components/shared/DatePicker';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import { useRegisterForm } from '../../Context';
import {
  Container,
  ProductsSelect,
  CategoriesProductsSelect,
  ProductDetails,
} from './styles';

const CampaignForm: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [productSelected, setProductSelected] = useState<Option | null>(null);

  const { campaign, addGoal } = useRegisterForm();

  useEffect(() => {
    if (productSelected) {
      addGoal({
        product: {
          id: parseInt(productSelected.value, 0),
          name: productSelected.title,
        },
        expectedVolume: 0,
      });
    }
  }, [addGoal, productSelected]);

  return (
    campaign && (
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
        {campaign.goals?.map(item => (
          <ProductDetails key={`goal-${item.product.id}`}>
            <div>
              <h3>{item.product.name}</h3>
              <ReactSVG src={deleteIcon} />
            </div>
            <h5>Volume previsto</h5>
            <input type="text" value={item.expectedVolume} />
          </ProductDetails>
        ))}
      </Container>
    )
  );
};

export default CampaignForm;
