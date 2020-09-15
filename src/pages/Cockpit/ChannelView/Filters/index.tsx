import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/CampaignsManager/Selects/Directors';
import RegionalSelect from 'components/CampaignsManager/Selects/Regional';
import TypeSelect from 'components/shared/Vendavall/Establishments/TypeSelect';

import { Container, Fields } from './styles';

export interface Filters {
  /* directorshipName?: string;
  regionalName?: string;
  type?: EstablishmentTypes;
  categoryId: number;
  channelId: number; */
  test: string;
}

interface Props {
  onFilter(filters: Filters): Promise<void>;
}

const FiltersComponent: React.FC<Props> = ({ onFilter }) => {
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [typeSelected, setTypeSelected] = useState<Option | null>(null);
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    onFilter({ test: '' });
  }, [onFilter]);

  return (
    <Container>
      <button type="button" onClick={() => setOpened(status => !status)}>
        + Filtrar
      </button>
      <Fields opened={opened}>
        <DirectorsSelect
          setValue={value => setDirectorSelected(value)}
          value={directorSelected}
          placeholder="Diretoria"
        />
        <RegionalSelect
          setValue={value => setRegionalSelected(value)}
          value={regionalSelected}
          placeholder="Regional"
        />
        <TypeSelect
          setValue={value => setTypeSelected(value)}
          value={typeSelected}
          placeholder="Tipo"
        />
        <TypeSelect
          setValue={value => setCategorySelected(value)}
          value={categorySelected}
          placeholder="Tipo"
        />
        <TypeSelect
          setValue={value => setChannelSelected(value)}
          value={channelSelected}
          placeholder="Tipo"
        />
      </Fields>
    </Container>
  );
};

export default FiltersComponent;
