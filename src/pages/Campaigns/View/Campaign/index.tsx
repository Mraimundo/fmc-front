import React from 'react';
import { Campaign as ICampaign } from 'services/campaigns/getCampaign';
import { ModalStatus } from 'hooks/use-modal-status';

import Header from './Header';
import Prize from './Prize';
import Product from './Product';
import Regulation from './Regulation';
import { Container, Content } from './styles';

interface Props {
  campaign: ICampaign;
  regulationModal: ModalStatus;
}

const Campaign: React.FC<Props> = ({ campaign, regulationModal }) => {
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
          </>
        )}
      </Content>
    </Container>
  );
};

export default Campaign;
