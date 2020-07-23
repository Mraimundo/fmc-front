import React from 'react';

import BaseSelect from 'components/shared/Select/BaseSelect';
import { Establishment } from 'state/modules/point-management/common/types';
import { Wrapper } from './styles';

interface EstablishmentSelectionProps {
  establishments: Establishment[];
  selectedEstablishment: Establishment | null;
  onChange(establishment: Establishment): void;
}

const EstablishmentSelection: React.FC<EstablishmentSelectionProps> = ({
  establishments,
  selectedEstablishment,
  onChange,
}) => {
  return (
    <Wrapper>
      <BaseSelect
        setValue={onChange}
        value={selectedEstablishment}
        label="Selecionar estabelecimento"
        loadItems={() => establishments}
        inputRole="primary"
      />
    </Wrapper>
  );
};

export default EstablishmentSelection;
