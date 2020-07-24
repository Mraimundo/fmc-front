import React from 'react';

import { Tooltip } from 'components/shared';
import { Subsidiary } from 'state/modules/point-management/team-awards/types';
import { limitChars } from 'util/string';
import { List, SubsidiaryItem } from './styles';

interface Props {
  subsidiaries: Subsidiary[] | null;
  onRemove(id: number): void;
}
const SelectedSubsidiaries: React.FC<Props> = ({ subsidiaries, onRemove }) => {
  return (
    <List>
      {!!subsidiaries &&
        subsidiaries.map((sub: Subsidiary) => (
          <SubsidiaryItem
            key={sub.name}
            title={`Remover ${sub.name}`}
            onClick={() => onRemove(sub.id)}
          >
            <Tooltip title={sub.name} type="primary">
              {limitChars(sub.name, 25)}
            </Tooltip>
          </SubsidiaryItem>
        ))}
    </List>
  );
};

export default SelectedSubsidiaries;
