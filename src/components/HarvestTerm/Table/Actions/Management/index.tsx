import React, { useCallback } from 'react';

import Button from 'components/shared/Button';
import { Container, ApproveButton, RepproveButton } from './styles';

interface ManagementProps {
  agreementTermId: string;
}

const Management: React.FC<ManagementProps> = ({ agreementTermId }) => {
  const handleClick = useCallback(() => {
    alert(`HERE WE GO   ${agreementTermId}`);
  }, [agreementTermId]);

  return (
    <Container>
      <ApproveButton buttonRole="primary" type="button" onClick={handleClick}>
        Aprovar
      </ApproveButton>
      <RepproveButton buttonRole="primary" type="button" onClick={handleClick}>
        Reprovar
      </RepproveButton>
    </Container>
  );
};

export default Management;
