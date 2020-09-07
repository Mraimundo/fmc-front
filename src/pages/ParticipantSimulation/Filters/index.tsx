import React, { useState, useMemo, useCallback } from 'react';

import { Button } from 'components/shared';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/CampaignsManager/Selects/Directors';
import RegionalSelect from 'components/CampaignsManager/Selects/Regional';

import { Container } from './styles';

export interface FilterOptions {
  directorId?: string;
  regionalId?: string;
  typeId?: number;
  channelId?: number;
  search?: string;
}

interface Props {
  onFilter(filters?: FilterOptions): Promise<void>;
}

const Filters: React.FC<Props> = ({ onFilter }) => {
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [typeSelected, setTypeSelected] = useState<Option | null>(null);
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [searchInput, setSearchInput] = useState('');

  const handleFilterClick = useCallback(() => {
    console.log('filter');
  }, []);

  return useMemo(
    () => (
      <Container>
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

        <RegionalSelect
          setValue={value => setTypeSelected(value)}
          value={typeSelected}
          placeholder="Tipo"
        />

        <RegionalSelect
          setValue={value => setChannelSelected(value)}
          value={channelSelected}
          placeholder="Canal"
        />

        <input
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
        />

        <Button type="button" buttonRole="primary" onClick={handleFilterClick}>
          Filtrar
        </Button>
      </Container>
    ),
    [
      handleFilterClick,
      directorSelected,
      regionalSelected,
      channelSelected,
      typeSelected,
      searchInput,
    ],
  );
};

export default Filters;
