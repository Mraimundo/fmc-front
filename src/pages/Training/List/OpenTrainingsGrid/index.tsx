import React, { useState, useEffect, useCallback } from 'react';

import { Pagination } from 'config/constants/vendavallPaginationInterface';
import { Training, TRAINING_STATUS } from 'services/training/interfaces';
import getTrainings from 'services/training/getTrainings';

import { Button } from 'components/shared';
import Grid from './Grid';
import { Container, Content } from './styles';

interface Props {
  categoryId: number | null;
}

const OpenTrainingsGrid: React.FC<Props> = ({ categoryId }) => {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [pagination, setPagination] = useState<Pagination>({} as Pagination);

  useEffect(() => {
    getTrainings({
      status: TRAINING_STATUS.AVAILABLE,
      categoryId,
    }).then(({ data, pagination: apiPagination }) => {
      console.log(data);
      setTrainings(data);
      setPagination(apiPagination);
    });
  }, [categoryId]);

  const handleLoadMore = useCallback(() => {
    if (pagination.current_page === pagination.last_page) return;

    getTrainings({
      status: TRAINING_STATUS.AVAILABLE,
      page: pagination.current_page + 1,
    }).then(({ data: apiData, pagination: apiPagination }) => {
      setTrainings(data => [...data, ...apiData]);
      setPagination(apiPagination);
    });
  }, [pagination]);

  return (
    <Container>
      <Content>
        <Grid data={trainings} />
        {pagination.current_page !== pagination.last_page && (
          <Button buttonRole="primary" type="button" onClick={handleLoadMore}>
            Carregar mais treinamentos
          </Button>
        )}
      </Content>
    </Container>
  );
};

export default OpenTrainingsGrid;
