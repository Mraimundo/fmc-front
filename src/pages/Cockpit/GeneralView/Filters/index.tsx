import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/Cockpit/Selects/Directors';
import RegionalSelect from 'components/Cockpit/Selects/Regional';
import getRegionals from 'services/cockpit/getRegional';
import getDirectors from 'services/cockpit/getDirectors';

import { Container, SelectContainer } from './styles';

export interface Filters {
  directorName?: string;
  regionalName?: string;
}

interface Props {
  onFilter(filters: Filters): Promise<void>;
}

const FiltersComponent: React.FC<Props> = ({ onFilter }) => {
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [showRegionalSelect, setShowRegionalSelect] = useState(true);
  const [showDirectorSelect, setShowDirectorSelect] = useState(true);

  useEffect(() => {
    getRegionals().then(data => {
      setShowRegionalSelect(data.length > 1);
      if (data.length === 1) {
        setRegionalSelected({
          value: data[0].id.toString(),
          title: data[0].name,
        });
      }
    });

    getDirectors().then(data => {
      setShowDirectorSelect(data.length > 1);
      if (data.length === 1) {
        setDirectorSelected({
          value: data[0].id,
          title: data[0].name,
        });
      }
    });
  }, []);

  useEffect(() => {
    onFilter({
      directorName: directorSelected?.title,
      regionalName: regionalSelected?.title,
    });
  }, [directorSelected, regionalSelected, onFilter]);

  return (
    <Container>
      <SelectContainer>
        <span>Diretoria: </span>
        {showDirectorSelect ? (
          <DirectorsSelect
            setValue={value => setDirectorSelected(value)}
            value={directorSelected}
            placeholder=""
          />
        ) : (
          <span>{directorSelected?.title}</span>
        )}
      </SelectContainer>
      <SelectContainer>
        <span>Regional: </span>
        {showRegionalSelect ? (
          <RegionalSelect
            setValue={value => setRegionalSelected(value)}
            value={regionalSelected}
            placeholder=""
            directorName={directorSelected?.title}
          />
        ) : (
          <span>{regionalSelected?.title}</span>
        )}
      </SelectContainer>
    </Container>
  );
};

export default FiltersComponent;
