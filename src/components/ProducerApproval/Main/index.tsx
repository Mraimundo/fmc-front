import React from 'react';
import { useFarmersContext } from 'pages/ProducerApproval/Context';
import ReactPaginate from 'react-paginate';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import Filters from '../Filters';
import Tabs from '../Tabs';
import FarmersCardList from '../FarmersCardList';
import ApprovalModal from '../Modals/ApprovalModal';
import ReprovalModal from '../Modals/ReprovalModal';

import { Container } from './styles';

const Main: React.FC = () => {
  const {
    farmers,
    pagination,
    setPage,
    approvalModalIsOpen,
    setApprovalModalIsOpen,
    reprovalModalIsOpen,
    setReprovalModalIsOpen,
  } = useFarmersContext();

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
          pageRangeDisplayed={6}
          onPageChange={({ selected }) => setPage(selected + 1)}
          containerClassName="farmers-pagination"
        />
      )}
      <ApprovalModal
        isOpen={approvalModalIsOpen}
        onCancelRequest={() => setApprovalModalIsOpen(false)}
      />
      <ReprovalModal
        isOpen={reprovalModalIsOpen}
        onCancelRequest={() => setReprovalModalIsOpen(false)}
      />
    </Container>
  );
};

export default Main;
