import React from 'react';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import ReactPaginate from 'react-paginate';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import Filters from '../Filters';
import Tabs from '../Tabs';
import FarmersCardList from '../FarmersCardList';

import { Container } from './styles';

const Main: React.FC = () => {
  const { farmers, pagination, setPage } = useFarmersContext();
  return (
    <Container>
      <Tabs />
      <Filters />
      <FarmersCardList farmers={farmers} />
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
          containerClassName="farmers-pagination"
        />
      )}
    </Container>
  );
};

export default Main;
