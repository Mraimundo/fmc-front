import React, { useCallback, useEffect, useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import { Client } from 'services/dashboard/charts/transformers';

import { Container, Fields } from './styles';

interface Props {
  clients: Client[];
  onFilter(data: Client[]): void;
}

const Filters: React.FC<Props> = ({ clients, onFilter }) => {
  const [opened, setOpened] = useState(false);
  const [clientsSelected, setClientsSelected] = useState<Client[]>([]);

  const handleCheckbox = useCallback((client: Client, checked: boolean) => {
    setClientsSelected(oldData => {
      const filteredData = oldData.filter(item => item.name !== client.name);
      if (checked) {
        filteredData.push(client);
      }
      return filteredData;
    });
  }, []);

  useEffect(() => {
    onFilter(clientsSelected);
  }, [clientsSelected, onFilter]);

  return (
    <Container>
      <button type="button" onClick={() => setOpened(status => !status)}>
        {opened ? '-' : '+'} Filtrar
      </button>
      <Fields opened={opened}>
        {clients.map(item => (
          <span key={`checkbox-${item.name}`}>
            <Checkbox
              color="default"
              onChange={e => handleCheckbox(item, e.target.checked)}
            />
            {`${item.name}`}
          </span>
        ))}
      </Fields>
    </Container>
  );
};

export default Filters;
