import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import HarvestSelect from 'components/HarvestTerm/Selects/Harvest';
import RegionalSelect from 'components/HarvestTerm/Selects/Regional';
import DirectorsSelect from 'components/HarvestTerm/Selects/Directors';
import { Option } from 'components/shared/Select';
import { useAuth } from 'context/AuthContext';
import { useHarvestTermsContext } from 'components/HarvestTerm/Context';
import { Filters } from 'services/harvest-term/interface';

import {
  Container,
  SelectsWrapper,
  TabsWrapper,
  Input,
  InputWrapper,
  Button,
} from './styles';
import Tabs from './Tabs';

const HarvestFilters: React.FC = () => {
  const { participant } = useAuth();
  const { applyFilters, isFetching } = useHarvestTermsContext();

  const [harvestSelected, setHarvestSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    let filters = {} as Filters;

    if (harvestSelected) {
      filters = {
        ...filters,
        campaignId: parseInt(harvestSelected.value, 10),
      };
    }
    if (regionalSelected) {
      filters = {
        ...filters,
        regionalId: parseInt(regionalSelected.value, 10),
      };
    }
    if (directorSelected) {
      filters = {
        ...filters,
        directorship: directorSelected.value,
      };
    }

    if (harvestSelected || regionalSelected || directorSelected) {
      applyFilters(filters);
    }
  }, [harvestSelected, regionalSelected, directorSelected, applyFilters]);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const onSearchClickHandler = useCallback(() => {
    applyFilters({ search: searchValue } as Filters);
  }, [applyFilters, searchValue]);

  return (
    <Container>
      <SelectsWrapper>
        <HarvestSelect
          value={harvestSelected}
          setValue={value => setHarvestSelected(value)}
          participantCpf={participant.cpf}
          label="Safra"
        />
        <DirectorsSelect
          value={directorSelected}
          setValue={value => setDirectorSelected(value)}
          label="Diretoria"
        />
        <RegionalSelect
          value={regionalSelected}
          setValue={value => setRegionalSelected(value)}
          label="Regional"
        />
      </SelectsWrapper>
      <InputWrapper>
        <Input
          name="search"
          label="Campo de Pesquisa"
          onChange={onChangeHandler}
          value={searchValue}
        />
        <Button
          buttonRole="primary"
          type="button"
          onClick={onSearchClickHandler}
          loading={isFetching}
        >
          Buscar
        </Button>
      </InputWrapper>
      <TabsWrapper>
        <Tabs />
      </TabsWrapper>
    </Container>
  );
};

export default HarvestFilters;
