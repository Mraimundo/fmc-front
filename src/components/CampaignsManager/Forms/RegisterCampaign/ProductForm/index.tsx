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
  ContainerBox,
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
          expectedSellIn: 0,
          expectedSellOut: 0,
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
            <ContainerBox>
              <div>
                <h5>Volume</h5>
                <InputValue
                  onChange={e =>
                    dispatch(addGoal({ ...item, expectedVolume: e }))
                  }
                  value={item.expectedVolume}
                  component={Input}
                  formatValue={formatProductsInput}
                  inputRole="secondary"
                  error={errors[`goals[${index}].expectedVolume`]}
                />
              </div>
              <div>
                <h5>Sell-in</h5>
                <InputValue
                  placeholder="0,00 US$"
                  onChange={e =>
                    dispatch(addGoal({ ...item, expectedSellIn: e }))
                  }
                  value={item.expectedSellIn}
                  component={Input}
                  formatValue={e => formatProductsInput(e, 'US$')}
                  inputRole="secondary"
                />
              </div>
              <div>
                <h5>Sell-out</h5>
                <InputValue
                  placeholder="0,00 US$"
                  onChange={e =>
                    dispatch(addGoal({ ...item, expectedSellOut: e }))
                  }
                  value={item.expectedSellOut}
                  component={Input}
                  formatValue={e => formatProductsInput(e, 'US$')}
                  inputRole="secondary"
                />
              </div>
            </ContainerBox>
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
