import React from 'react';
import { Campaign as ICampaign } from 'services/campaigns/getCampaign';
import { ModalStatus } from 'hooks/use-modal-status';

import { useAuth } from 'context/AuthContext';
import { PROFILES } from 'config/constants';
import Header from './Header';
import Prize from './Prize';
import Product from './Product';
import Regulation from './Regulation';
import Result from './Result';
import ImportResult from './ImportResult';
import { Container, Content } from './styles';

interface Props {
  campaign: ICampaign;
  regulationModal: ModalStatus;
}

const Campaign: React.FC<Props> = ({ campaign, regulationModal }) => {
  const {
    participant: { profile },
  } = useAuth();
  return (
    <Container>
      <Content>
        <Header data={campaign} />
        <Prize
          prizeDescription={campaign.prizeDescription}
          prizeTitle={campaign.prizeTitle}
        />
        <Product data={campaign.products} />
        {campaign.signed && (
          <>
            <Regulation
              acceptedDate={campaign.acceptedDate}
              regulationModal={regulationModal}
            />
            <Result />
            {profile === PROFILES.focalPoint && <ImportResult />}
          </>
        )}
      </Content>
    </Container>
  );
};

export default Campaign;
