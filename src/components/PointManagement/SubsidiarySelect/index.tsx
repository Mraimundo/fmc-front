import React, { useState, useRef, useMemo } from 'react';
import { ReactSVG } from 'react-svg';

import { Tooltip } from 'components/shared';
import { limitChars } from 'util/string';
import useOnClickOutside from 'hooks/use-on-click-outside';
import { Subsidiary } from 'state/modules/point-management/team-awards/types';
import { Label, Checkbox } from 'components/PointManagement';
import { Input, WrapperInput, Wrapper, Dropdown } from './styles';

import arrowDownIcon from 'assets/images/point-management/arrow-down.svg';

type Props = {
  subsidiaries: Subsidiary[] | null;
  selectedSubsidiaries: number[] | null;
  onSelect: (value: number) => void;
};
const SubsidiarySelect: React.FC<Props> = ({
  subsidiaries = [],
  selectedSubsidiaries,
  onSelect,
}) => {
  const [visible, isVisible] = useState(false);
  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => isVisible(false));

  const selectedSubsidiariesText = useMemo(() => {
    if (!selectedSubsidiaries) return 'Todas filiais';

    const subsidiariesCount = selectedSubsidiaries.length;
    return subsidiariesCount > 1
      ? `${subsidiariesCount} filiais selecionadas`
      : `${subsidiariesCount} filial selecionada`;
  }, [selectedSubsidiaries]);

  return (
    <Wrapper ref={dropdownRef}>
      <Label>Filtrar filial</Label>
      <WrapperInput onClick={() => isVisible(!visible)}>
        <Input
          id="filter-branch"
          type="text"
          value={selectedSubsidiariesText}
          data-testid="participants-finder-input"
          readOnly
        />
        <ReactSVG src={arrowDownIcon} />
      </WrapperInput>
      {visible && (
        <Dropdown>
          <ul>
            {!!subsidiaries &&
              subsidiaries.map(({ id, name }: Subsidiary) => {
                const isChecked = selectedSubsidiaries
                  ? selectedSubsidiaries.includes(id)
                  : false;

                return (
                  <li key={id}>
                    <Tooltip title={name} type="primary">
                      <Checkbox
                        checked={isChecked}
                        onChange={() => onSelect(id)}
                        label={limitChars(name, 40)}
                      />
                    </Tooltip>
                  </li>
                );
              })}
          </ul>
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default SubsidiarySelect;
