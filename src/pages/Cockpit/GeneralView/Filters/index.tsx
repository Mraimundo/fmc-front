import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/CampaignsManager/Selects/Directors';
import RegionalSelect from 'components/CampaignsManager/Selects/Regional';

import { Container, SelectContainer } from './styles';

export interface Filters {
  directorshipName?: string;
  regionalName?: string;
}

interface Props {
  onFilter(filters: Filters): Promise<void>;
}

const FiltersComponent: React.FC<Props> = ({ onFilter }) => {
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);

  useEffect(() => {
    if (!directorSelected || !regionalSelected) return;
    onFilter({
      directorshipName: directorSelected.title,
      regionalName: regionalSelected.title,
    });
  }, [directorSelected, regionalSelected, onFilter]);

  return (
    <Container>
      <SelectContainer>
        <span>Diretoria: </span>
        <DirectorsSelect
          setValue={value => setDirectorSelected(value)}
          value={directorSelected}
          placeholder=""
        />
      </SelectContainer>
      <SelectContainer>
        <span>Regional: </span>
        <RegionalSelect
          setValue={value => setRegionalSelected(value)}
          value={regionalSelected}
          placeholder=""
        />
      </SelectContainer>
    </Container>
  );
};

export default FiltersComponent;
