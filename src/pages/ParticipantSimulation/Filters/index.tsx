import React, { useState, useMemo, useCallback } from 'react';

import { FilterOptions } from 'services/participant-simulation/get-participants-list-to-simulate';
import { Button } from 'components/shared';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/CampaignsManager/Selects/Directors';
import RegionalSelect from 'components/CampaignsManager/Selects/Regional';
import TypeSelect from 'components/shared/Vendavall/Establishments/TypeSelect';
import ChannelsSelect from 'components/Cockpit/Selects/Channels';

import { EstablishmentTypes } from 'config/constants';
import { Container } from './styles';

interface Props {
  onFilter(filters?: Omit<FilterOptions, 'page'>): void;
}

const Filters: React.FC<Props> = ({ onFilter }) => {
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [typeSelected, setTypeSelected] = useState<Option | null>(null);
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [searchInput, setSearchInput] = useState('');

  const handleFilterClick = useCallback(() => {
    onFilter({
      directorId: directorSelected?.value,
      regionalId: regionalSelected?.value,
      typeId: typeSelected?.value?.toLowerCase(),
      channelId: channelSelected
        ? parseInt(channelSelected.value, 0)
        : undefined,
      search: searchInput,
    });
  }, [
    onFilter,
    directorSelected,
    regionalSelected,
    typeSelected,
    channelSelected,
    searchInput,
  ]);

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

        <TypeSelect
          setValue={value => setTypeSelected(value)}
          value={typeSelected}
          placeholder="Tipo"
        />

        <ChannelsSelect
          directorName={directorSelected?.title}
          typeName={typeSelected?.title as EstablishmentTypes}
          regionalName={regionalSelected?.title}
          setValue={value => setChannelSelected(value)}
          value={channelSelected}
          placeholder="Canal"
        />
        <input
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          placeholder="Digite o Nome, e-mail, Grupo de cliente ou Código de cliente"
        />

        <Button type="button" buttonRole="primary" onClick={handleFilterClick}>
          Pesquisar
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
