import React from 'react';

import { Subsidiary } from 'state/modules/point-management/team-awards/types';
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
            {sub.name}
          </SubsidiaryItem>
        ))}
    </List>
  );
};

export default SelectedSubsidiaries;
