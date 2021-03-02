import React, { useCallback } from 'react';

import { ShowcaseProduct } from 'state/modules/home/types';
import { formatPoints } from 'util/points';
import {
  ProductItemStyled,
  StyledLink,
  ImageWrapper,
  NameWrapper,
  Name,
  Price,
} from './styles';

interface ProductItemProps {
  product: ShowcaseProduct;
  isSimulating: boolean;
  isProducerProfile?: boolean;
}
const ProductItem: React.FC<ProductItemProps> = ({
  product,
  isSimulating,
  isProducerProfile = false,
}) => {
  const { link, picture, name, price } = product;

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (isSimulating) {
        e.preventDefault();
      }
    },
    [isSimulating],
  );

  return (
    <ProductItemStyled>
      <StyledLink
        onClick={e => handleLinkClick(e)}
        href={isSimulating ? '' : link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ImageWrapper>
          <img src={picture} alt="" title="" />
        </ImageWrapper>
        <NameWrapper>
          <Name>{name} </Name>
          <Price>
            {formatPoints(price)}{' '}
            <span>{!isProducerProfile ? 'pontos' : 'FMC Coins'}</span>
          </Price>
        </NameWrapper>
      </StyledLink>
    </ProductItemStyled>
  );
};

export default ProductItem;
