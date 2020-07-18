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
            key={sub.label}
            title={`Remover ${sub.label}`}
            onClick={() => onRemove(sub.id)}
          >
            {sub.label}
          </SubsidiaryItem>
        ))}
    </List>
  );
};

export default SelectedSubsidiaries;
