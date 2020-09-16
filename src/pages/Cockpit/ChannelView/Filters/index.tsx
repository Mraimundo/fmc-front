import React, { useState, useEffect } from 'react';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/CampaignsManager/Selects/Directors';
import RegionalSelect from 'components/Cockpit/Selects/Regional';
import TypeSelect from 'components/shared/Vendavall/Establishments/TypeSelect';
import CategorySelect from 'components/shared/Vendavall/Establishments/CategorySelect';
import ChannelsSelect from 'components/Cockpit/Selects/Channels';

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
        <DirectorsSelect
          setValue={value => setDirectorSelected(value)}
          value={directorSelected}
          placeholder="Diretoria"
        />
        <RegionalSelect
          key={`regional-${directorSelected?.title || ''}`}
          setValue={value => setRegionalSelected(value)}
          value={regionalSelected}
          placeholder="Regional"
          directorName={directorSelected?.title || ''}
        />
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
