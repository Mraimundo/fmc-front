import React, { useEffect, useState } from 'react';
import transformer, {
  Response as ITableItemData,
} from 'services/campaigns-manager/transformers/campaignsToCampaignsTable';
import { ApproverProfile } from 'services/campaigns-manager/interfaces/Campaign';
import headers from './headers';
import { useCampaignsList } from '../../Context';
import { Container } from './styles';

/* interface Props {
  data: ParticipantIndication[];
  isFetching: boolean;
} */

interface Props {
  profile: ApproverProfile;
}

const Table: React.FC<Props> = ({ profile }) => {
  const { campaigns, isFetching } = useCampaignsList();
  const [tableData, setTableData] = useState<ITableItemData[]>([]);

  useEffect(() => {
    setTableData(transformer(campaigns));
  }, [campaigns]);

  return (
    <Container
      headers={headers(profile)}
      data={tableData}
      noResultText="Nenhuma Pesquisa encontrada"
      isFetching={isFetching}
    />
  );
};

export default Table;
