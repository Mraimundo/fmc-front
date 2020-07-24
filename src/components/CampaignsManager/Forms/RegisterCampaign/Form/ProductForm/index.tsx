import React, { useState, useEffect, useMemo } from 'react';
import { Option } from 'components/shared/Select';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import InputValue from 'components/CampaignsManager/Inputs/NumberMaskInput';
import { formatProductsInput } from 'util/products';
import { useRegisterForm } from '../../Context';
import {
  Container,
  ProductsSelect,
  CategoriesProductsSelect,
  ProductDetails,
  Input,
  ObservatioBox,
} from './styles';

const CampaignForm: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [productSelected, setProductSelected] = useState<Option | null>(null);

  const { campaign, addGoal, removeGoal, setTextsValue } = useRegisterForm();

  useEffect(() => {
    if (productSelected) {
      addGoal({
        product: {
          id: parseInt(productSelected.value, 0),
          name: productSelected.title,
        },
        expectedVolume: 0,
      });
      setTimeout(() => {
        setProductSelected(null);
      }, 1000);
    }
  }, [addGoal, productSelected]);

  return useMemo(
    () => (
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
          segment={categorySelected?.value}
        />
        {campaign.goals?.map(item => (
          <ProductDetails key={`goal-${item.product.id}`}>
            <div>
              <h3>{item.product.name}</h3>
              <ReactSVG src={deleteIcon} onClick={() => removeGoal(item)} />
            </div>
            <h5>Volume previsto</h5>
            <InputValue
              onChange={e => addGoal({ ...item, expectedVolume: e })}
              value={item.expectedVolume}
              component={Input}
              formatValue={formatProductsInput}
            />
          </ProductDetails>
        ))}
        <ObservatioBox>
          <span>Observações</span>
          <textarea
            value={campaign.observation}
            onChange={e => setTextsValue('observation', e.target.value)}
          />
        </ObservatioBox>
      </Container>
    ),
    [
      addGoal,
      categorySelected,
      productSelected,
      removeGoal,
      campaign.goals,
      campaign.observation,
      setTextsValue,
    ],
  );
};

export default CampaignForm;
