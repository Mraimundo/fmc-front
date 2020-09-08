import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import { Type } from 'services/products/interfaces';
import getProductTypes from 'services/products/getTypes';
import { Filters } from '..';

import {
  Container,
  Header,
  TitleContainer,
  ProductTypes,
  ProductType,
  Indicator,
  TypeTitle,
  CategoriesSelect,
} from './styles';

interface Props {
  onFilter(filters: Filters): Promise<void>;
}

const FiltersScreen: React.FC<Props> = ({ onFilter }) => {
  const [productTypes, setProductTypes] = useState<Type[]>([]);
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [typeSelected, setTypeSelected] = useState<Type | null>(null);

  useEffect(() => {
    getProductTypes().then(data => setProductTypes(data));
  }, []);

  useEffect(() => {
    if (productTypes.length === 0) return;

    setTypeSelected(productTypes[0]);
  }, [productTypes]);

  useEffect(() => {
    const parsedCategoryId = categorySelected?.value
      ? parseInt(categorySelected.value, 0)
      : undefined;
    const parsedTypeId = typeSelected?.id || undefined;
    onFilter({ categoryId: parsedCategoryId, typeId: parsedTypeId });
  }, [categorySelected, typeSelected, onFilter]);

  return (
    <Container>
      <Header>
        <CategoriesSelect
          value={categorySelected}
          setValue={setCategorySelected}
          label="Cultura"
        />
        <TitleContainer>
          <h3>Selecione o segmento para ver a solução mais adequada.</h3>
        </TitleContainer>
      </Header>
      <ProductTypes>
        {productTypes.map(item => (
          <ProductType
            onClick={() => setTypeSelected(item)}
            key={`product-${item.id}`}
          >
            <Indicator selected={typeSelected?.id === item.id} />
            <TypeTitle selected={typeSelected?.id === item.id}>
              {item.name}
            </TypeTitle>
          </ProductType>
        ))}
      </ProductTypes>
    </Container>
  );
};

export default FiltersScreen;
