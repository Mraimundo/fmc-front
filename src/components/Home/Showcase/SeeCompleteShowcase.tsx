import React from 'react';

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
      <a href={link} target="_blank" rel="noopener noreferrer">
        <ImageWrapper>
          <img src={picture} alt="" title="" />
        </ImageWrapper>
        <NameWrapper>
          <SeeCompleteShowcaseText>
            VEJA A VITRINE DE PRÊMIOS COMPLETA
          </SeeCompleteShowcaseText>
        </NameWrapper>
      </a>
    </ProductItemStyled>
  );
};

export default SeeCompleteShowcase;
