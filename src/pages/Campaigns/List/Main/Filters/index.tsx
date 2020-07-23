import React, { useState } from 'react';

import { Button } from 'components/shared';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/CampaignsManager/Selects/Directors';
import RegionalSelect from 'components/CampaignsManager/Selects/Regional';
import CustomersSelect from 'components/CampaignsManager/Selects/Customers';
import CampaignStatusSelect from 'components/CampaignsManager/Selects/CampaignStatus';
import MechanicsSelect from 'components/CampaignsManager/Selects/Mechanics';

import { Container, Separator } from './styles';

const Filters: React.FC = () => {
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);

  return (
    <Container>
      <h4>Campanhas solicitadas (7)</h4>
      <Separator />
      <DirectorsSelect
        setValue={value => setCategorySelected(value)}
        value={categorySelected}
        placeholder="Diretoria"
      />
      <RegionalSelect
        setValue={value => setCategorySelected(value)}
        value={categorySelected}
        placeholder="Regional"
      />
      <CustomersSelect
        setValue={value => setCategorySelected(value)}
        value={categorySelected}
        placeholder="Grupo de cliente"
      />
      <CampaignStatusSelect
        setValue={value => setCategorySelected(value)}
        value={categorySelected}
        placeholder="Status"
      />
      <MechanicsSelect
        setValue={value => setCategorySelected(value)}
        value={categorySelected}
        placeholder="Mecânica"
      />
      <Button type="button" buttonRole="primary">
        Filtrar
      </Button>
    </Container>
  );
};

export default Filters;
