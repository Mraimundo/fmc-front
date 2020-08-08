import React from 'react';

import marketplaceImage from 'assets/images/point-management/marketplace-image.png';
import { PointsInput } from 'components/PointManagement';
import { Wrapper, Title, Image, Input } from './styles';

interface MarketplacePointsProps {
  onChange(points: number): void;
  marketplacePoints: number;
  maxLength?: number;
}
const MarketplacePoints: React.FC<MarketplacePointsProps> = ({
  onChange,
  marketplacePoints,
  maxLength,
}) => {
  return (
    <Wrapper>
      <Title>RESGATE NO CATÁLOGO DE PRÊMIOS</Title>
      <Image
        src={marketplaceImage}
        alt="Catálogo de Prêmios Imagem"
        title="Catálogo de Prêmios"
      />
      <PointsInput
        onChange={onChange}
        value={marketplacePoints}
        placeholder="DIGITE O VALOR"
        component={Input}
        maxLength={maxLength}
      />
    </Wrapper>
  );
};

export default MarketplacePoints;
