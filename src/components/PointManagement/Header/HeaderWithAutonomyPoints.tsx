import React, { useMemo } from 'react';

import headerImage from 'assets/images/point-management/header-image-2.png';
import { formatPoints } from 'util/points';
import { EstablishmentType } from 'state/modules/point-management/common/types';
import { PointsInput } from 'components/PointManagement';
import {
  HeaderAutonomyWrapper,
  TotalPointsToDistributeText,
  TextDistributeWrapper,
  BoxInput,
  DistributeInput,
  InputsWrapper,
  DistributeButton,
} from './styles';

interface Props {
  generalPoints: number;
  totalTeamAwardPoints: number;
  totalResaleCooperativePoints: number;
  onSetTeamAwardPoints(points: number): void;
  onSetResaleCooperativePoints(points: number): void;
  onReadyToDistribute(): void;
  isAllowedToStartDistribution: boolean;
  establishmentType: EstablishmentType | '';
}
const HeaderWithAutonomyPoints: React.FC<Props> = ({
  generalPoints,
  totalTeamAwardPoints,
  totalResaleCooperativePoints,
  onSetTeamAwardPoints,
  onSetResaleCooperativePoints,
  onReadyToDistribute,
  isAllowedToStartDistribution,
  establishmentType,
}: Props) => {
  const totalPoints = useMemo(
    () => generalPoints - (totalResaleCooperativePoints + totalTeamAwardPoints),
    [generalPoints, totalResaleCooperativePoints, totalTeamAwardPoints],
  );

  const totalPointsText = useMemo(
    () =>
      `TOTAL PONTOS ${establishmentType} PARA DISTRIBUIR ${formatPoints(
        totalPoints,
      )}`,
    [establishmentType, totalPoints],
  );

  const teamAwardsMaxLength = useMemo(() => {
    if (generalPoints === totalResaleCooperativePoints) return 0;

    return generalPoints - totalResaleCooperativePoints;
  }, [generalPoints, totalResaleCooperativePoints]);

  const resaleCooperativeMaxLength = useMemo(() => {
    if (generalPoints === totalTeamAwardPoints) return 0;

    return generalPoints - totalTeamAwardPoints;
  }, [generalPoints, totalTeamAwardPoints]);

  return (
    <HeaderAutonomyWrapper>
      <img src={headerImage} alt="" title="" />
      <div>
        <TextDistributeWrapper>
          <TotalPointsToDistributeText>
            {totalPointsText}
          </TotalPointsToDistributeText>
          <p>
            Defina como deseja utilizar seus e pontos. Eles podem ser
            distribuídos entre equipe e/ou {establishmentType}.
          </p>
        </TextDistributeWrapper>
        <InputsWrapper>
          <BoxInput>
            <h2>PONTOS {establishmentType}</h2>
            <span>Pontos para distribuir</span>

            <PointsInput
              value={totalResaleCooperativePoints}
              onChange={onSetResaleCooperativePoints}
              component={DistributeInput}
              maxLength={resaleCooperativeMaxLength}
            />
          </BoxInput>
          <BoxInput>
            <h2>PONTOS EQUIPE</h2>
            <span>Pontos para distribuir</span>

            <PointsInput
              value={totalTeamAwardPoints}
              onChange={onSetTeamAwardPoints}
              component={DistributeInput}
              maxLength={teamAwardsMaxLength}
            />
          </BoxInput>
        </InputsWrapper>
        <div>
          <DistributeButton
            type="button"
            disabled={!isAllowedToStartDistribution}
            onClick={onReadyToDistribute}
            data-testid="button-distribute-points-cooperative"
          >
            DISTRIBUIR PONTOS
          </DistributeButton>
        </div>
      </div>
    </HeaderAutonomyWrapper>
  );
};

export default HeaderWithAutonomyPoints;
