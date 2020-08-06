import React from 'react';

import { ShowcaseProduct } from 'state/modules/home/types';
import { formatPoints } from 'util/points';
import {
  ProductItemStyled,
  ImageWrapper,
  NameWrapper,
  Name,
  Price,
} from './styles';

interface ProductItemProps {
  product: ShowcaseProduct;
}
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { link, picture, name, price } = product;

  return (
    <ProductItemStyled>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ImageWrapper>
          <img src={picture} alt="" title="" />
        </ImageWrapper>
        <NameWrapper>
          <Name>{name}</Name>
          <Price>
            {formatPoints(price)} <span>pontos</span>
          </Price>
        </NameWrapper>
      </a>
    </ProductItemStyled>
  );
};

export default ProductItem;
