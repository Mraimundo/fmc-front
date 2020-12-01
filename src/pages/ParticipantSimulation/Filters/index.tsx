import React, { useState, useMemo, useCallback, useEffect } from 'react';

import { FilterOptions } from 'services/participant-simulation/get-participants-list-to-simulate';
import { Button } from 'components/shared';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/Cockpit/Selects/Directors';
import RegionalSelect from 'components/Cockpit/Selects/Regional';
import TypeSelect from 'components/shared/Vendavall/Establishments/TypeSelect';
import ProfileSelect from 'components/shared/Vendavall/Establishments/ProfileSelect';
import ChannelsSelect from 'components/Cockpit/Selects/Channels';
import getRegionals from 'services/cockpit/getRegional';
import getDirectors from 'services/cockpit/getDirectors';

import { EstablishmentTypes } from 'config/constants';
import { Container } from './styles';

interface Props {
  onFilter(filters?: Omit<FilterOptions, 'page'>): void;
}

const Filters: React.FC<Props> = ({ onFilter }) => {
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [typeSelected, setTypeSelected] = useState<Option | null>(null);
  const [profileSelected, setProfileSelected] = useState<Option | null>(null);
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [searchInput, setSearchInput] = useState('');

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

  const handleFilterClick = useCallback(() => {
    onFilter({
      directorId: directorSelected?.value,
      regionalId: regionalSelected?.title,
      typeId: typeSelected?.value?.toLowerCase(),
      channelId: channelSelected
        ? parseInt(channelSelected.value, 0)
        : undefined,
      search: searchInput,
      // MAYCONN
      isFocalPoint: profileSelected
        ? parseInt(profileSelected.value, 0)
        : undefined,
    });
  }, [
    onFilter,
    directorSelected,
    regionalSelected,
    typeSelected,
    profileSelected,
    channelSelected,
    searchInput,
  ]);

  return useMemo(
    () => (
      <Container>
        {showDirectorSelect && (
          <DirectorsSelect
            setValue={value => setDirectorSelected(value)}
            value={directorSelected}
            placeholder="Diretoria"
          />
        )}
        {showRegionalSelect && (
          <RegionalSelect
            setValue={value => setRegionalSelected(value)}
            directorName={directorSelected?.title}
            value={regionalSelected}
            placeholder="Regional"
          />
        )}
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
        <ProfileSelect
          setValue={value => setProfileSelected(value)}
          value={profileSelected}
          placeholder="Perfil"
        />
        <input
          type="text"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          placeholder="Digite o Nome, Grupo de cliente ou Código de cliente"
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
      showDirectorSelect,
      showRegionalSelect,
      profileSelected,
    ],
  );
};

export default Filters;
