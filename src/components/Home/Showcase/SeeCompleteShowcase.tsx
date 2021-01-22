import React, { useState, useEffect, useCallback } from 'react';

import { getParticipantsToAccessPI } from 'services/showcase';

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
  const [piAccess, setPiAccess] = useState('');
  useEffect(() => {
    getParticipantsToAccessPI().then(data => {
      console.log('getParticipantsToAccessPI');
      console.log(data);

      setPiAccess(data.find(item => item.type === 'cpf')?.urlPi || '');
      return;
    });
  }, []);

  const handlePiAccess = useCallback(() => {
    if (!piAccess) return;

    const linkClick = document.createElement('a');
    linkClick.href = piAccess;
    linkClick.target = '_blank';
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [piAccess]);

  return (
    <ProductItemStyled>
      <ImageWrapper>
        <img src={picture} alt="" title="" />
      </ImageWrapper>
      <NameWrapper>
        <SeeCompleteShowcaseText
          onClick={handlePiAccess}
          disabled={piAccess === ''}
        >
          VEJA A VITRINE DE PRÊMIOS COMPLETA
        </SeeCompleteShowcaseText>
      </NameWrapper>
    </ProductItemStyled>
  );
};

export default SeeCompleteShowcase;
