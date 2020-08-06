import React from 'react';
import { Response as ICampaign } from 'services/campaignsManager/transformers/campaignToParticipantCampaignPage';

import Header from './Header';
import Prize from './Prize';
import Product from './Product';
import { Container, Content } from './styles';

interface Props {
  campaign: ICampaign;
}

const Campaign: React.FC<Props> = ({ campaign }) => {
  return (
    <Container>
      <Content>
        <Header data={campaign} />
        <Prize
          prizeDescription={campaign.prizeDescription}
          prizeTitle={campaign.prizeTitle}
        />
        <Product data={campaign.products} />
      </Content>
    </Container>
  );
};

export default Campaign;
