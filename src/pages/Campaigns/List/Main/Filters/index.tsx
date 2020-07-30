import React, { useState, useMemo } from 'react';

import { Button } from 'components/shared';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/CampaignsManager/Selects/Directors';
import RegionalSelect from 'components/CampaignsManager/Selects/Regional';
import CustomersSelect from 'components/CampaignsManager/Selects/Customers';
import CampaignStatusSelect from 'components/CampaignsManager/Selects/CampaignStatus';
import MechanicsSelect from 'components/CampaignsManager/Selects/Mechanics';
import { Mechanic } from 'services/campaignsManager/interfaces/Campaign';
import { useCampaignsList } from '../../Context';

import { Container, Separator } from './styles';

const Filters: React.FC = () => {
  const { resume } = useCampaignsList();
  const [categorySelected, setCategorySelected] = useState<Option | null>(null);
  const [mechanicSelected, setMechanicSelected] = useState<Mechanic | null>(
    null,
  );

  return useMemo(
    () => (
      <Container>
        <h4>Campanhas solicitadas ({resume.length})</h4>
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
          setValue={value => setMechanicSelected(value)}
          value={mechanicSelected}
          placeholder="Mecânica"
        />
        <Button type="button" buttonRole="primary">
          Filtrar
        </Button>
      </Container>
    ),
    [categorySelected, mechanicSelected, resume],
  );
};

export default Filters;
