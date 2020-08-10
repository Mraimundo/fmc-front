import React, { useCallback, useState, useEffect } from 'react';
import { StyledAgreementTermContent } from './styles';

interface Props {
  filePath: string;
}

const AgreementTerm: React.FC<Props> = () => {
  return (
    <StyledAgreementTermContent type="primary">
      Termo de acordo
    </StyledAgreementTermContent>
  );
};

export default AgreementTerm;
