import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import { Label } from 'components/PointManagement';
import searchIcon from 'assets/images/point-management/search-icon.svg';
import useDebounce from 'hooks/use-debounce';
import { Wrapper, Input } from './styles';

type Props = {
  onChange: (v: string) => void;
};

const PARTICIPANTS_FINDER_DEBOUNCE_TIME = 500; // ms
const ParticipantsFinder: React.FC<Props> = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(
    searchTerm,
    PARTICIPANTS_FINDER_DEBOUNCE_TIME,
  );

  useEffect(() => {
    onChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onChange]);

  return (
    <div>
      <Label htmlFor="filter-branch">Localize um participante</Label>
      <Wrapper>
        <Input
          id="filter-branch"
          type="text"
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          data-testid="participants-finder-input"
        />
        <ReactSVG src={searchIcon} />
      </Wrapper>
    </div>
  );
};

export default ParticipantsFinder;
