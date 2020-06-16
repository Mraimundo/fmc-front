import React, { useCallback, useState } from 'react';
import { Regulation } from 'services/register/interfaces/IRegulation';
import parser from 'html-react-parser';

import { Container, RegulationContent, Button } from './styles';

interface Props {
  onAccept(): Promise<void> | void;
  regulation: Regulation | null;
}

const DataRegulation: React.FC<Props> = ({ onAccept, regulation }) => {
  const [loading, setLoading] = useState(false);
  const buttonRole = 'primary';

  const handleAcceptClick = useCallback(async () => {
    setLoading(true);
    try {
      await onAccept();
    } catch {}

    setLoading(false);
  }, [onAccept]);

  return (
    <Container>
      <RegulationContent type="primary">
        {parser(regulation?.content || '')}
      </RegulationContent>
      <Button
        type="button"
        buttonRole={buttonRole}
        onClick={handleAcceptClick}
        loading={loading}
      >
        Aceito
      </Button>
    </Container>
  );
};

export default DataRegulation;
