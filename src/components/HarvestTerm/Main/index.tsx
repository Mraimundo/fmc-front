import React from 'react';

import Filters from 'components/HarvestTerm/Filters';
import Table from 'components/HarvestTerm/Table';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ReactPaginate from 'react-paginate';
import { useHarvestTermsContext } from 'components/HarvestTerm/Context';

import { Container, Title, TitleWrapper, Separator } from './styles';

const Main: React.FC = () => {
  const { pagination, setPage } = useHarvestTermsContext();

  return (
    <Container>
      <TitleWrapper>
        <Title>Aprovação de Acordos de Safra</Title>
      </TitleWrapper>
      <Filters />
      <Separator />
      <Table />
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
          containerClassName="terms-pagination"
        />
      )}
    </Container>
  );
};

export default Main;
