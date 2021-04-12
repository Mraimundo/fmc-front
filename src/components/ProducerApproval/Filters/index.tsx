import React, { useCallback, useState } from 'react';

import Input from 'components/shared/Input/BaseInput';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import { Container, Button, Title, FiltersBox } from './styles';

const Filters: React.FC = () => {
  const { applySearch, isFetching } = useFarmersContext();
  const [searchValue, setSearchValue] = useState('');

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(e.target.value);
    },
    [],
  );

  const onClickHandler = useCallback(() => {
    applySearch(searchValue);
  }, [applySearch, searchValue]);

  return (
    <Container>
      <Title>Pesquisar</Title>
      <FiltersBox>
        <Input
          placeholder="Nome, Grupo de Fazenda, E-mail ou CPF"
          inputRole="primary"
          onChange={onChangeHandler}
        />
        <Button
          type="button"
          buttonRole="primary"
          onClick={onClickHandler}
          loading={isFetching}
        >
          Buscar
        </Button>
      </FiltersBox>
    </Container>
  );
};

export default Filters;
