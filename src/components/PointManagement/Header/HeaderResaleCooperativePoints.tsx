import React from 'react';

import { formatPoints } from 'util/points';
import {
  HeaderImageWrapper,
  WrapperBoxPoints,
  BoxPoints,
  PointsText,
} from './styles';
import headerImage from 'assets/images/point-management/header-image.png';

interface Props {
  points: number;
}
const HeaderResaleCooperativePoints: React.FC<Props> = ({ points }: Props) => {
  return (
    <HeaderImageWrapper>
      <img src={headerImage} />
      <WrapperBoxPoints>
        <BoxPoints type="resaleCooperative">
          <PointsText>{`TOTAL COOPERATIVA ${formatPoints(points)}`}</PointsText>
        </BoxPoints>
      </WrapperBoxPoints>
    </HeaderImageWrapper>
  );
};

export default HeaderResaleCooperativePoints;
