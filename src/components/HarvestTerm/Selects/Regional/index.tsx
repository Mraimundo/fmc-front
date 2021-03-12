import React, { useEffect, useState, useCallback } from 'react';
import { Option } from 'components/shared/Select';
import BaseSelect from 'components/shared/Select/BaseSelect';
import getData from 'services/cockpit/getRegional';
import transformer from 'services/cockpit/transformers/regionalToSelectOptions';

// import { Container } from './styles';

interface RegionalSelectProps {
  className?: string;
  label?: string;
  setValue(value: Option | null): void;
  value: Option | null;
  placeholder?: string;
  directorName?: string;
}

const RegionalSelect: React.FC<RegionalSelectProps> = ({
  className,
  label,
  setValue,
  value,
  placeholder,
  directorName,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  return <div />;
};

export default RegionalSelect;
