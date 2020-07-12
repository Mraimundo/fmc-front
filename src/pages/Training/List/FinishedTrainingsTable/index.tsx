import React, { useEffect, useState } from 'react';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import getTrainings from 'services/training/getTrainings';
import { TRAINING_STATUS } from 'services/training/interfaces';
import transformer, {
  Response as Data,
} from 'services/training/transformers/toTrainingsTable';
import headers from './headers';
import { Container } from './styles';

const FinishedTrainingsTable: React.FC = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [tableData, setTableData] = useState<Data[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);

  useEffect(() => {
    setIsFetching(true);
    getTrainings({
      status: TRAINING_STATUS.FINISHED,
    })
      .then(({ data, pagination: apiPagination }) => {
        setTableData(transformer(data));
        setPagination(apiPagination);
      })
      .finally(() => setIsFetching(false));
  }, []);

  return (
    <Container
      headers={headers}
      data={tableData}
      noResultText="Nenhum Treinamento realizado"
      isFetching={isFetching}
    />
  );
};

export default FinishedTrainingsTable;
