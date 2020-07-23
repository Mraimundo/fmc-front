import React, { useMemo } from 'react';

import { formatPoints } from 'util/points';
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

import headerImage from 'assets/images/point-management/header-image-2.png';

interface Props {
  generalPoints: number;
  totalTeamAwardPoints: number;
  totalResaleCooperativePoints: number;
  onSetTeamAwardPoints(points: number): void;
  onSetResaleCooperativePoints(points: number): void;
  onReadyToDistribute(): void;
  isAllowedToEdit: boolean;
  isAllowedToStartDistribution: boolean;
}
const HeaderWithAutonomyPoints: React.FC<Props> = ({
  generalPoints,
  totalTeamAwardPoints,
  totalResaleCooperativePoints,
  onSetTeamAwardPoints,
  onSetResaleCooperativePoints,
  onReadyToDistribute,
  isAllowedToEdit,
  isAllowedToStartDistribution,
}: Props) => {
  const totalPoints = useMemo(
    () => generalPoints - (totalResaleCooperativePoints + totalTeamAwardPoints),
    [generalPoints, totalResaleCooperativePoints, totalTeamAwardPoints],
  );

  return (
    <HeaderAutonomyWrapper>
      <img src={headerImage} />
      <div>
        <TextDistributeWrapper>
          <TotalPointsToDistributeText>
            {`TOTAL PONTOS COOPERATIVA PARA DISTRIBUIR ${formatPoints(
              totalPoints,
            )}`}
          </TotalPointsToDistributeText>
          <p>
            Defina como deseja utilizar seus e pontos. Eles podem ser
            distribuídos entre equipe e/ou cooperativa.
          </p>
        </TextDistributeWrapper>
        <InputsWrapper>
          <BoxInput>
            <h2>PONTOS EQUIPE</h2>
            <span>Pontos para distribuir</span>
            <PointsInput
              value={totalTeamAwardPoints}
              onChange={onSetTeamAwardPoints}
              component={DistributeInput}
              maxLength={generalPoints - totalResaleCooperativePoints}
              disabled={isAllowedToEdit}
            />
          </BoxInput>
          <BoxInput>
            <h2>PONTOS COOPERATIVA</h2>
            <span>Pontos para distribuir</span>

            <PointsInput
              value={totalResaleCooperativePoints}
              onChange={onSetResaleCooperativePoints}
              component={DistributeInput}
              maxLength={generalPoints - totalTeamAwardPoints}
              disabled={isAllowedToEdit}
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
