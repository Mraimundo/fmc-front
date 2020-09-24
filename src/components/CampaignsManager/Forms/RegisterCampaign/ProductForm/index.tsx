import React, { useState, useEffect, useMemo } from 'react';
import { Option } from 'components/shared/Select';
import { ReactSVG } from 'react-svg';
import deleteIcon from 'assets/images/campaigns/delete-icon.svg';
import InputValue from 'components/CampaignsManager/Inputs/NumberMaskInput';
import { formatProductsInput } from 'util/products';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCampaign,
  getErrors,
} from 'state/modules/campaigns-manager/selectors';
import {
  addGoal,
  removeGoal,
  setFieldValue,
} from 'state/modules/campaigns-manager/actions';
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

  const dispatch = useDispatch();
  const campaign = useSelector(getCampaign);
  const errors = useSelector(getErrors);

  useEffect(() => {
    if (productSelected) {
      dispatch(
        addGoal({
          product: {
            id: parseInt(productSelected.value, 0),
            name: productSelected.title,
          },
          expectedVolume: 0,
        }),
      );
      setTimeout(() => {
        setProductSelected(null);
      }, 1000);
    }
  }, [productSelected, dispatch]);

  return useMemo(
    () => (
      <Container>
        <h4>Produtos</h4>
        <CategoriesProductsSelect
          setValue={value => setCategorySelected(value)}
          value={categorySelected}
          placeholder="Segmento"
        />
        <ProductsSelect
          setValue={value => setProductSelected(value)}
          value={productSelected}
          placeholder="Selecionar produtos"
          segment={categorySelected?.value}
          error={errors.goals}
        />
        {campaign.goals?.map((item, index) => (
          <ProductDetails key={`goal-${item.product.id}`}>
            <div className="_productName">
              <h3>{item.product.name}</h3>
              <ReactSVG
                src={deleteIcon}
                onClick={() => dispatch(removeGoal(item))}
              />
            </div>
            <h5>Volume previsto</h5>
            <InputValue
              onChange={e => dispatch(addGoal({ ...item, expectedVolume: e }))}
              value={item.expectedVolume}
              component={Input}
              formatValue={formatProductsInput}
              inputRole="secondary"
              error={errors[`goals[${index}].expectedVolume`]}
            />
          </ProductDetails>
        ))}
        <ObservatioBox>
          <span>Observações</span>
          <textarea
            value={campaign.observation}
            onChange={e =>
              dispatch(
                setFieldValue({
                  fieldName: 'observation',
                  value: e.target.value,
                }),
              )
            }
          />
        </ObservatioBox>
      </Container>
    ),
    [
      categorySelected,
      productSelected,
      campaign.goals,
      campaign.observation,
      dispatch,
      errors,
    ],
  );
};

export default CampaignForm;
