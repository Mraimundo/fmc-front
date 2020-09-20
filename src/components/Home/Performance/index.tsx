import React from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import routeMap from 'routes/route-map';

import openLinkIcon from 'assets/images/open-link-icon.svg';
import CircularProgress from './CircularProgress';
import {
  Wrapper,
  PerformanceWrapper,
  ProgressWrapper,
  IndividualProgressWrapper,
  Label,
  CompletePerformanceWrapper,
} from './styles';

export interface Props {
  realized: {
    bilingPercent: number;
    pogPercent: number;
    premioPercent: number;
    heroPercent: number;
    talismanPercent: number;
  };
}

const Performance: React.FC<Props> = ({
  realized: {
    bilingPercent,
    pogPercent,
    premioPercent,
    heroPercent,
    talismanPercent,
  },
}) => {
  return (
    <Wrapper>
      <PerformanceWrapper>
        <ProgressWrapper borderRight>
          <IndividualProgressWrapper>
            <Label>FATURAMENTO</Label>
            <CircularProgress color="#FF4C16" percent={bilingPercent || 0} />
          </IndividualProgressWrapper>
          <IndividualProgressWrapper>
            <Label>POG</Label>
            <CircularProgress color="#25CCE1" percent={pogPercent || 0} />
          </IndividualProgressWrapper>
        </ProgressWrapper>
        <ProgressWrapper>
          <IndividualProgressWrapper>
            <Label>
              PREMIO<span>®</span>
            </Label>
            <CircularProgress color="#913944" percent={premioPercent || 0} />
          </IndividualProgressWrapper>
          <IndividualProgressWrapper>
            <Label>
              HERO<span>®</span>
            </Label>
            <CircularProgress color="#47C246" percent={heroPercent || 0} />
          </IndividualProgressWrapper>
          <IndividualProgressWrapper>
            <Label>
              TALISMAN<span>®</span>
            </Label>
            <CircularProgress color="#838BC5" percent={talismanPercent || 0} />
          </IndividualProgressWrapper>
        </ProgressWrapper>
      </PerformanceWrapper>
      <CompletePerformanceWrapper>
        <Link to={routeMap.goal}>
          CONFIRA SEU DESEMPENHO COMPLETO
          <ReactSVG src={openLinkIcon} />
        </Link>
      </CompletePerformanceWrapper>
    </Wrapper>
  );
};

export default Performance;
