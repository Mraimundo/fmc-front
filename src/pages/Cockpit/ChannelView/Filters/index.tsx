import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/Cockpit/Selects/Directors';
import RegionalSelect from 'components/Cockpit/Selects/Regional';
import TypeSelect from 'components/shared/Vendavall/Establishments/TypeSelect';
import CategorySelect from 'components/shared/Vendavall/Establishments/CategorySelect';
import ChannelsSelect from 'components/Cockpit/Selects/Channels';
import getRegionals from 'services/cockpit/getRegional';
import getDirectors from 'services/cockpit/getDirectors';

import { EstablishmentCategory, EstablishmentTypes } from 'config/constants';
import { Container, Fields } from './styles';

interface Props {
  onFilter(establishmentId: number): Promise<void>;
  clear(): void;
}

const FiltersComponent: React.FC<Props> = ({ onFilter, clear }) => {
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [typeSelected, setTypeSelected] = useState<Option | null>(null);
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [channelSelected, setChannelSelected] = useState<Option | null>(null);
  const [opened, setOpened] = useState(false);
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
    if (!channelSelected) {
      clear();
      return;
    }
    onFilter(parseInt(channelSelected.value, 0));
  }, [onFilter, clear, channelSelected]);

  return (
    <Container>
      <button type="button" onClick={() => setOpened(status => !status)}>
        {opened ? '-' : '+'} Filtrar
      </button>
      <Fields opened={opened}>
        {showDirectorSelect ? (
          <DirectorsSelect
            setValue={value => setDirectorSelected(value)}
            value={directorSelected}
            placeholder="Diretoria"
          />
        ) : (
          <span>Diretoria: {directorSelected?.title}</span>
        )}
        {showRegionalSelect ? (
          <RegionalSelect
            key={`regional-${directorSelected?.title || ''}`}
            setValue={value => setRegionalSelected(value)}
            value={regionalSelected}
            placeholder="Regional"
            directorName={directorSelected?.title || ''}
          />
        ) : (
          <span>Regional: {regionalSelected?.title}</span>
        )}
        <TypeSelect
          setValue={value => setTypeSelected(value)}
          value={typeSelected}
          placeholder="Tipo"
        />
        <CategorySelect
          setValue={value => setCategorySelected(value)}
          value={categorySelected}
          placeholder="Categoria"
        />
        <ChannelsSelect
          setValue={value => setChannelSelected(value)}
          value={channelSelected}
          placeholder="Canal"
          directorName={directorSelected?.title}
          categoryName={categorySelected?.title as EstablishmentCategory}
          typeName={typeSelected?.title as EstablishmentTypes}
          regionalName={regionalSelected?.title}
        />
      </Fields>
    </Container>
  );
};

export default FiltersComponent;
