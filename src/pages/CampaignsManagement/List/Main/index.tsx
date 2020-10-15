import React from 'react';

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';

import { useAuth } from 'context/AuthContext';
import ApprovalModal from 'components/CampaignsManager/Modals/ApprovalBoard';
import ReactPaginate from 'react-paginate';
import Resume from './Resume';
import Filters from './Filters';
import Table from './Table';

import { useCampaignsList } from '../Context';

import { Separator } from './Filters/styles';
import { Container, Content } from './styles';

const Main: React.FC = () => {
  const { participant } = useAuth();

  const {
    approvalModalOpened,
    closeApprovalModal,
    campaignSelected,
    approve,
    disapprove,
    pagination,
    setPage,
  } = useCampaignsList();

  return (
    <Container>
      <Content>
        <Resume />
        <Filters profile={participant.profile_value} />
        <Separator />
        <Table profile={participant.profile_value} />
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
            containerClassName="campaigns-pagination"
          />
        )}
        {campaignSelected && (
          <ApprovalModal
            isOpen={approvalModalOpened}
            onRequestClose={closeApprovalModal}
            approvers={campaignSelected.approvers}
            myProfile={participant.profile_value}
            profileTurnToApprove={campaignSelected.profileTurnToApprove}
            onApprove={approve}
            onDisapprove={disapprove}
          />
        )}
      </Content>
    </Container>
  );
};

export default Main;
