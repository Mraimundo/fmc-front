import React, { useState, useEffect } from 'react';
import { Campaign as ICampaign } from 'services/campaigns/getCampaign';
import { CAMPAIGN_STATUS_TEXT } from 'services/campaigns-manager/interfaces/Campaign';
import { ModalStatus } from 'hooks/use-modal-status';

import getUrlToDownloadFinalResults from 'services/campaigns-counting/getUrlToDownloadFinalResults';

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
  const [finalResultsUrl, setFinalResultsUrl] = useState('');

  useEffect(() => {
    if (!campaign.id) return;

    getUrlToDownloadFinalResults(campaign.id).then(url =>
      setFinalResultsUrl(url),
    );
  }, [campaign.id]);

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
            {campaign.status === CAMPAIGN_STATUS_TEXT.COMPLETED && (
              <>
                {finalResultsUrl && <Result pdfFile={finalResultsUrl} />}
                {profile === PROFILES.focalPoint && (
                  <ImportResult campaign={campaign} />
                )}
              </>
            )}
          </>
        )}
      </Content>
    </Container>
  );
};

export default Campaign;
