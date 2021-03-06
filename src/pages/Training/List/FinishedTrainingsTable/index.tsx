import React, { useEffect, useState } from 'react';
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
  /* const [pagination, setPagination] = useState<Pagination>({} as Pagination); */

  useEffect(() => {
    setIsFetching(true);
    getTrainings({
      status: [TRAINING_STATUS.INITIATED],
      limit: 50,
    })
      .then(({ data }) => {
        setTableData(transformer(data));
        // setPagination(apiPagination);
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
