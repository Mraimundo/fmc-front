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

  // GAMBIARRA
  const [trainingsToSend, setTrainingsToSend] = useState<Training[]>([]);

  useEffect(() => {
    getTrainings({
      status: [TRAINING_STATUS.AVAILABLE, TRAINING_STATUS.INITIATED],
      categoryId,
      limit: 100,
    }).then(({ data, pagination: apiPagination }) => {
      setTrainings(data.filter(item => !item.participation?.approved));

      const currentPage = 1;
      const lastPage = Math.ceil(data.length / 3);

      setTrainingsToSend(data.slice(0, 3));
      setPagination({
        current_page: currentPage,
        last_page: lastPage,
        per_page: 3,
      } as Pagination);
    });
  }, [categoryId]);

  /* const handleLoadMore = useCallback(() => {
    if (pagination.current_page === pagination.last_page) return;

    getTrainings({
      status: [TRAINING_STATUS.AVAILABLE, TRAINING_STATUS.INITIATED],
      page: pagination.current_page + 1,
    }).then(({ data: apiData, pagination: apiPagination }) => {
      setTrainings(data => [...data, ...apiData]);
      setPagination(apiPagination);
    });
  }, [pagination]); */

  const handleLoadMore = useCallback(() => {
    setPagination(pag => {
      const {
        current_page: page,
        per_page: perPage,
        last_page: lastPage,
      } = pag;
      if (page === lastPage) return pag;
      const from = page * perPage;
      const to = (page + 1) * perPage;
      setTrainingsToSend(d => [...d, ...trainings.slice(from, to)]);
      return {
        ...pag,
        current_page: page + 1,
      } as Pagination;
    });
  }, [trainings]);

  return (
    <Container>
      <Content>
        <Grid data={trainingsToSend} />
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
