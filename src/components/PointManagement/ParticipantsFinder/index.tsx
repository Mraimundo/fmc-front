import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import InputLabel from '@material-ui/core/InputLabel';

import searchIcon from 'assets/images/point-management/search-icon.svg';
import useDebounce from 'hooks/use-debounce';
import { Wrapper, Input } from './styles';

type Props = {
  onChange: (v: string) => void;
};

const ParticipantsFinder: React.FC<Props> = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) onChange(searchTerm);
  }, [debouncedSearchTerm]);

  return (
    <>
      <InputLabel id="filter-branch">Filtrar Cargos</InputLabel>
      <Wrapper>
        <Input
          type="text"
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          data-testid="participants-finder-input"
        />
        <ReactSVG src={searchIcon} />
      </Wrapper>
    </>
  );
};

export default ParticipantsFinder;
