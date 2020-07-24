import React from 'react';

import { formatPoints } from 'util/points';
import { EstablishmentType } from 'state/modules/point-management/common/types';
import {
  HeaderImageWrapper,
  WrapperBoxPoints,
  BoxPoints,
  PointsText,
} from './styles';
import headerImage from 'assets/images/point-management/header-image.png';

interface Props {
  points: number;
  establishmentType: EstablishmentType | '';
}
const HeaderResaleCooperativePoints: React.FC<Props> = ({ points, establishmentType }) => {
  return (
    <HeaderImageWrapper>
      <img src={headerImage} alt="" title="" />
      <WrapperBoxPoints>
        <BoxPoints type="resaleCooperative">
          <PointsText>{`TOTAL ${establishmentType} ${formatPoints(points)}`}</PointsText>
        </BoxPoints>
      </WrapperBoxPoints>
    </HeaderImageWrapper>
  );
};

export default HeaderResaleCooperativePoints;
