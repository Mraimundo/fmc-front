import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import { Type } from 'services/products/interfaces';
import getProductTypes from 'services/products/getTypes';

import curveDownArrowPng from 'assets/images/products/curve-arrow2.png';
import rightArrowPng from 'assets/images/products/right-arrow2.png';
import curveLeftArrowPng from 'assets/images/products/curve-left.png';
import leftArrowPng from 'assets/images/products/left-arrow.png';
import ballPng from 'assets/images/products/ball.png';

import filledCurveLeftPng from 'assets/images/products/filled-curve-left-arrow.png';
import filledCurveDownPng from 'assets/images/products/filled-curve-down-arrow.png';
import filledLeftArrowPng from 'assets/images/products/filled-left-arrow.png';
import filledRightArrowPng from 'assets/images/products/filled-right-arrow.png';
import filledBallPng from 'assets/images/products/filled-ball.png';

import {
  Container,
  Header,
  SelectContainer,
  Label,
  TitleContainer,
  CategoriesSelect,
  IndicatorContainer,
  Indicator,
} from './styles';

export interface Filters {
  categoryId?: number;
  typeId?: number;
}

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
        <SelectContainer>
          <Label>Cultura</Label>
          <CategoriesSelect
            value={categorySelected}
            setValue={setCategorySelected}
          />
        </SelectContainer>
        <TitleContainer>
          <h3>Selecione o segmento para ver a solução mais adequada.</h3>
        </TitleContainer>
      </Header>
      <IndicatorContainer>
        {productTypes[0] && (
          <Indicator
            selected={typeSelected?.id === productTypes[0].id}
            onClick={() => setTypeSelected(productTypes[0])}
          >
            <img
              src={
                typeSelected?.id === productTypes[0].id
                  ? filledRightArrowPng
                  : rightArrowPng
              }
              alt="Right arrow in path"
            />
            <img
              src={
                typeSelected?.id === productTypes[0].id
                  ? filledBallPng
                  : ballPng
              }
              className="_ball"
              alt="Circle in arrow"
            />
            <span>{productTypes[0].name}</span>
          </Indicator>
        )}
        {productTypes[1] && (
          <Indicator
            selected={typeSelected?.id === productTypes[1].id}
            onClick={() => setTypeSelected(productTypes[1])}
          >
            <img
              src={
                typeSelected?.id === productTypes[1].id
                  ? filledRightArrowPng
                  : rightArrowPng
              }
              alt="Right arrow in path"
            />
            <img
              src={
                typeSelected?.id === productTypes[1].id
                  ? filledBallPng
                  : ballPng
              }
              className="_ball"
              alt="Circle in arrow"
            />
            <span>{productTypes[1].name}</span>
          </Indicator>
        )}
        {productTypes[2] && (
          <Indicator
            selected={typeSelected?.id === productTypes[2].id}
            onClick={() => setTypeSelected(productTypes[2])}
            className="curve"
          >
            <img
              src={
                typeSelected?.id === productTypes[2].id
                  ? filledCurveDownPng
                  : curveDownArrowPng
              }
              alt="Curve arrow in path"
            />
            <img
              src={
                typeSelected?.id === productTypes[2].id
                  ? filledBallPng
                  : ballPng
              }
              className="_ball"
              alt="Circle in arrow"
            />
            <span>{productTypes[2].name}</span>
          </Indicator>
        )}
      </IndicatorContainer>
      <IndicatorContainer>
        {productTypes[3] && (
          <Indicator
            selected={typeSelected?.id === productTypes[3].id}
            onClick={() => setTypeSelected(productTypes[3])}
            className="curve"
          >
            <img
              src={
                typeSelected?.id === productTypes[3].id
                  ? filledCurveLeftPng
                  : curveLeftArrowPng
              }
              alt="Curve arrow in path"
            />
            <img
              src={
                typeSelected?.id === productTypes[3].id
                  ? filledBallPng
                  : ballPng
              }
              className="_ball"
              alt="Circle in arrow"
            />
            <span className="curve-span">{productTypes[3].name}</span>
          </Indicator>
        )}
        {productTypes[4] && (
          <Indicator
            selected={typeSelected?.id === productTypes[4].id}
            onClick={() => setTypeSelected(productTypes[4])}
          >
            <img
              src={
                typeSelected?.id === productTypes[4].id
                  ? filledLeftArrowPng
                  : leftArrowPng
              }
              alt="Left arrow in path"
            />
            <img
              src={
                typeSelected?.id === productTypes[4].id
                  ? filledBallPng
                  : ballPng
              }
              className="_ball"
              alt="Circle in arrow"
            />
            <span>{productTypes[4].name}</span>
          </Indicator>
        )}
        {productTypes[5] && (
          <Indicator
            selected={typeSelected?.id === productTypes[5].id}
            onClick={() => setTypeSelected(productTypes[5])}
          >
            <img
              src={
                typeSelected?.id === productTypes[5].id
                  ? filledLeftArrowPng
                  : leftArrowPng
              }
              alt="Left arrow in path"
            />
            <img
              src={
                typeSelected?.id === productTypes[5].id
                  ? filledBallPng
                  : ballPng
              }
              className="_ball"
              alt="Circle in arrow"
            />
            <span>{productTypes[5].name}</span>
          </Indicator>
        )}
      </IndicatorContainer>
    </Container>
  );
};

export default FiltersScreen;
