import React, { useState } from 'react';

import HarvestSelect from 'components/HarvestTerm/Selects/Harvest';
import RegionalSelect from 'components/HarvestTerm/Selects/Regional';
import DirectorsSelect from 'components/HarvestTerm/Selects/Directors';
import { Option } from 'components/shared/Select';
import { Container } from './styles';

const Filters: React.FC = () => {
  const [harvestSelected, setHarvestSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);

  return (
    <Container>
      <h2>Filtros</h2>
      <HarvestSelect
        value={harvestSelected}
        setValue={value => setHarvestSelected(value)}
        placeholder="Safra"
      />
      <DirectorsSelect
        value={directorSelected}
        setValue={value => setDirectorSelected(value)}
        placeholder="Diretoria"
      />
      <HarvestSelect
        value={harvestSelected}
        setValue={value => setHarvestSelected(value)}
        placeholder="Safra"
      />
    </Container>
  );
};

export default Filters;
