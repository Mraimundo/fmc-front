import React from 'react';

import CircularProgress from './CircularProgress';
import {
  Wrapper,
  ProgressWrapper,
  IndividualProgressWrapper,
  Label,
} from './styles';

const Performance: React.FC = () => {
  return (
    <Wrapper>
      <ProgressWrapper>
        <IndividualProgressWrapper>
          <Label>FATURAMENTO</Label>
          <CircularProgress color="#FF4C16" percent={0} />
        </IndividualProgressWrapper>
        <IndividualProgressWrapper>
          <Label>POG</Label>
          <CircularProgress color="#25CCE1" percent={0} />
        </IndividualProgressWrapper>
      </ProgressWrapper>
      <ProgressWrapper>
        <IndividualProgressWrapper>
          <Label>PRODUTO 1</Label>
          <CircularProgress color="#47C246" percent={0} />
        </IndividualProgressWrapper>
        <IndividualProgressWrapper>
          <Label>PRODUTO 2</Label>
          <CircularProgress color="#913944" percent={0} />
        </IndividualProgressWrapper>
        <IndividualProgressWrapper>
          <Label>PRODUTO 3</Label>
          <CircularProgress color="#838BC5" percent={0} />
        </IndividualProgressWrapper>
      </ProgressWrapper>
    </Wrapper>
  );
};

export default Performance;
