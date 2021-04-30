import React, { useCallback, useState } from 'react';

import Input from 'components/shared/Input/BaseInput';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { RiFileExcel2Line as ExcelIcon } from 'react-icons/ri';
import { Container, Button, Title, FiltersBox } from './styles';

const Filters: React.FC = () => {
  const {
    applySearch,
    isFetching,
    getExportFile,
    exportIsFetching,
  } = useFarmersContext();
  const [searchValue, setSearchValue] = useState('');

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
    const url = await getExportFile();

    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.click();
    }
  }, [getExportFile]);

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
          loading={exportIsFetching}
        >
          <ExcelIcon color="#fff" size={36} />
          <span>Exportar</span>
        </Button>
      </FiltersBox>
    </Container>
  );
};

export default Filters;
