import React, { useState } from 'react';

import HarvestSelect from 'components/HarvestTerm/Selects/Harvest';
import RegionalSelect from 'components/HarvestTerm/Selects/Regional';
import DirectorsSelect from 'components/HarvestTerm/Selects/Directors';
import { Option } from 'components/shared/Select';
import { useAuth } from 'context/AuthContext';
import { Container, SelectContainer } from './styles';

const Filters: React.FC = () => {
  const { participant } = useAuth();

  const [harvestSelected, setHarvestSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);

  return (
    <Container>
      <h2>Filtros</h2>
      <SelectContainer>
        <HarvestSelect
          value={harvestSelected}
          setValue={value => setHarvestSelected(value)}
          placeholder="Safra"
          participantCpf={participant.cpf}
        />
        <DirectorsSelect
          value={directorSelected}
          setValue={value => setDirectorSelected(value)}
          placeholder="Diretoria"
        />
        <RegionalSelect
          value={regionalSelected}
          setValue={value => setRegionalSelected(value)}
          placeholder="Regional"
        />
      </SelectContainer>
    </Container>
  );
};

export default Filters;
