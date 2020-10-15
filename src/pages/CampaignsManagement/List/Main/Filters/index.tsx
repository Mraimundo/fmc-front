import React, { useState, useMemo, useCallback } from 'react';

import { Button } from 'components/shared';
import { Option } from 'components/shared/Select';
import DirectorsSelect from 'components/CampaignsManager/Selects/Directors';
import RegionalSelect from 'components/CampaignsManager/Selects/Regional';
import CustomersSelect from 'components/CampaignsManager/Selects/Customers';
import CampaignStatusSelect from 'components/CampaignsManager/Selects/CampaignStatus';
import MechanicsSelect from 'components/CampaignsManager/Selects/Mechanics';
import {
  Mechanic,
  ApproverProfile,
} from 'services/campaignsManager/interfaces/Campaign';
import { GRM, RTC, KAM } from 'config/constants';
import { useCampaignsList } from '../../Context';

import { Container, Separator } from './styles';

interface Props {
  profile: ApproverProfile;
}

const Filters: React.FC<Props> = ({ profile }) => {
  const { applyFilters, campaigns, pagination } = useCampaignsList();
  const [directorSelected, setDirectorSelected] = useState<Option | null>(null);
  const [regionalSelected, setRegionalSelected] = useState<Option | null>(null);
  const [customerSelected, setCustomerSelected] = useState<Option | null>(null);
  const [statusSelected, setStatusSelected] = useState<Option | null>(null);
  const [mechanicSelected, setMechanicSelected] = useState<Mechanic | null>(
    null,
  );

  const profilesToNotShowDirectors: ApproverProfile[] = [GRM, RTC, KAM];
  const profilesToNotShowRegional: ApproverProfile[] = [RTC, KAM];

  const handleFilterClick = useCallback(() => {
    const directorId = directorSelected?.value || undefined;
    const regionalId = regionalSelected?.title || undefined;
    const customerId = customerSelected?.value
      ? parseInt(customerSelected.value, 0)
      : undefined;
    const status = statusSelected?.value || undefined;
    const mechanicId = mechanicSelected?.id || undefined;
    applyFilters({ directorId, customerId, mechanicId, regionalId, status });
  }, [
    directorSelected,
    regionalSelected,
    customerSelected,
    statusSelected,
    mechanicSelected,
    applyFilters,
  ]);

  return useMemo(
    () => (
      <Container>
        <h4>Campanhas solicitadas ({pagination?.total || 0})</h4>
        <Separator />
        {profilesToNotShowDirectors.indexOf(profile) === -1 && (
          <DirectorsSelect
            setValue={value => setDirectorSelected(value)}
            value={directorSelected}
            placeholder="Diretoria"
          />
        )}
        {profilesToNotShowRegional.indexOf(profile) === -1 && (
          <RegionalSelect
            setValue={value => setRegionalSelected(value)}
            value={regionalSelected}
            placeholder="Regional"
          />
        )}
        <CustomersSelect
          setValue={value => setCustomerSelected(value)}
          value={customerSelected}
          placeholder="Grupo de cliente"
        />
        <CampaignStatusSelect
          setValue={value => setStatusSelected(value)}
          value={statusSelected}
          placeholder="Status"
        />
        <MechanicsSelect
          setValue={value => setMechanicSelected(value)}
          value={mechanicSelected}
          placeholder="Mecânica"
        />
        <Button type="button" buttonRole="primary" onClick={handleFilterClick}>
          Filtrar
        </Button>
      </Container>
    ),
    [
      handleFilterClick,
      directorSelected,
      regionalSelected,
      customerSelected,
      statusSelected,
      mechanicSelected,
      campaigns,
      profilesToNotShowRegional,
      profilesToNotShowDirectors,
      profile,
    ],
  );
};

export default Filters;
