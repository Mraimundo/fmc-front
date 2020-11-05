import React, { useCallback, useEffect, useRef, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';

import ReactPaginate from 'react-paginate';
import getParticipants, {
  Participant,
  FilterOptions,
} from 'services/participant-simulation/get-participants-list-to-simulate';
import { Pagination } from 'config/constants/vendavallPaginationInterface';
import Filters from './Filters';
import Table from './Table';

import { Container, Content, Separator } from './styles';

const ParticipantSimulations: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [fetching, setFetching] = useState(false);

  const onFilter = useCallback(
    async (_filters: Omit<FilterOptions, 'page'>): Promise<void> => {
      setFilters({ ..._filters, page: 1 });
    },
    [],
  );

  const setPage = useCallback((page: number): void => {
    setFilters(oldFilters => ({ ...oldFilters, page }));
  }, []);

  useEffect(() => {
    setFetching(true);
    getParticipants(filters)
      .then(data => {
        setParticipants(data.participants);
        setPagination(data.pagination);
      })
      .finally(() => {
        setFetching(false);
        if (filters.page) {
          scroll.scrollTo(450);
        }
      });
  }, [filters]);

  return (
    <Container>
      <Content>
        <h3>Visão do participante</h3>
        <span>
          Selecione os filtros abaixo para acessar como um participante.
        </span>
        <Filters onFilter={onFilter} />
        <Separator />
        <h4 id="anchor-participants">Participantes</h4>
        <Table data={participants} isFetching={fetching} />
        {pagination && (
          <ReactPaginate
            previousLabel={<ChevronLeftRoundedIcon />}
            nextLabel={<ChevronRightRoundedIcon />}
            breakLabel="..."
            breakClassName="break-me"
            pageCount={pagination.last_page}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={({ selected }) => setPage(selected + 1)}
            containerClassName="participants-pagination"
          />
        )}
      </Content>
    </Container>
  );
};

export default ParticipantSimulations;
