import React from 'react';

import { Link } from 'react-router-dom';
import {
  ProductItemStyled,
  ImageWrapper,
  NameWrapper,
  SeeCompleteShowcaseText,
} from './styles';

interface SeeCompleteShowcaseProps {
  link: string;
  picture: string;
}
const SeeCompleteShowcase: React.FC<SeeCompleteShowcaseProps> = ({
  link,
  picture,
}) => {
  return (
    <ProductItemStyled>
      <Link to={link}>
        <ImageWrapper>
          <img src={picture} alt="" title="" />
        </ImageWrapper>
        <NameWrapper>
          <SeeCompleteShowcaseText>
            VEJA A VITRINE DE PRÊMIOS COMPLETA
          </SeeCompleteShowcaseText>
        </NameWrapper>
      </Link>
    </ProductItemStyled>
  );
};

export default SeeCompleteShowcase;
