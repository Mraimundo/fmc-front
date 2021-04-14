import React, { useCallback, useState } from 'react';

import Input from 'components/shared/Input/BaseInput';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { RiFileExcel2Line as ExcelIcon } from 'react-icons/ri';
import { getExport } from 'services/producer-approval';
import { Container, Button, Title, FiltersBox } from './styles';

const Filters: React.FC = () => {
  const { applySearch, isFetching } = useFarmersContext();
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const searchChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(e.target.value);
    },
    [],
  );

  const searchClickHandler = useCallback(() => {
    applySearch(searchValue);
  }, [applySearch, searchValue]);

  const exportClickHandler = useCallback(async () => {
    setLoading(true);
    const url = await getExport();
    window.open(url, '_blank');
    setLoading(false);
  }, []);

  return (
    <Container>
      <Title>Pesquisar</Title>
      <FiltersBox>
        <Input
          placeholder="Nome, Grupo de Fazenda, E-mail ou CPF"
          inputRole="primary"
          onChange={searchChangeHandler}
        />
        <Button
          type="button"
          buttonRole="primary"
          onClick={searchClickHandler}
          loading={isFetching}
        >
          Buscar
        </Button>
        <Button
          type="button"
          buttonRole="primary"
          onClick={exportClickHandler}
          loading={loading}
        >
          <ExcelIcon color="#fff" size={36} />
          <span>Exportar</span>
        </Button>
      </FiltersBox>
    </Container>
  );
};

export default Filters;
