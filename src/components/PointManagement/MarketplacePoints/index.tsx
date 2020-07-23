import React from 'react';

import { PointsInput } from 'components/PointManagement';
import { Wrapper, Title, Image, Input } from './styles';

import marketplaceImage from 'assets/images/point-management/marketplace-image.png';

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
      <Title>RESGATE NO MARKETPLACE</Title>
      <Image src={marketplaceImage} alt="" title="" />
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
