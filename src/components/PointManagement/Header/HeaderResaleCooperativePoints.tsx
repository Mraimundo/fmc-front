import React, { useMemo } from 'react';

import { EstablishmentTypes } from 'config/constants';
import headerImage from 'assets/images/point-management/header-image.png';
import { formatPoints } from 'util/points';
import {
  HeaderImageWrapper,
  WrapperBoxPoints,
  BoxPoints,
  PointsText,
} from './styles';

interface Props {
  points: number;
  establishmentType: EstablishmentTypes;
}
const HeaderResaleCooperativePoints: React.FC<Props> = ({
  points,
  establishmentType,
}) => {
  const pointsText = useMemo(
    () => `TOTAL ${establishmentType} ${formatPoints(points)} PONTOS`,
    [points, establishmentType],
  );

  return (
    <HeaderImageWrapper>
      <img src={headerImage} alt="" title="" />
      <WrapperBoxPoints>
        <BoxPoints type="resaleCooperative">
          <PointsText>{pointsText}</PointsText>
        </BoxPoints>
      </WrapperBoxPoints>
    </HeaderImageWrapper>
  );
};

export default HeaderResaleCooperativePoints;
