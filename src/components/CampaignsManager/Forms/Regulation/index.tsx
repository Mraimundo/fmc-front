import React, { useState, useCallback, useEffect } from 'react';
import { Campaign } from 'services/campaigns-manager/interfaces/Campaign';
import { useSelector } from 'react-redux';
import { getCampaign } from 'state/modules/campaigns-manager/selectors';
import getUrlRegulationToDownload from 'services/register/regulation/getUrlRegulationToDownload';
import getRegulation, {
  Response as IRegulation,
} from 'services/campaigns-manager/getRegulation';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import parser from 'html-react-parser';
import pdfIcon from 'assets/images/pdf.svg';

import { Container, RegulationContent, RegulationDownload } from './styles';

export interface Props {
  handleAction(campaign: Campaign): Promise<void>;
  isViewing?: boolean;
}
const Regulation: React.FC<Props> = ({ handleAction, isViewing = false }) => {
  const campaign = useSelector(getCampaign);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [regulation, setRegulation] = useState<IRegulation | null>(null);

  const handleButtonClick = useCallback(async () => {
    setLoading(true);
    await handleAction(campaign);
    setLoading(false);
  }, [campaign, handleAction]);

  const handleDownloadClick = useCallback(async () => {
    if (!regulation) return;

    setDownloading(true);
    const url = await getUrlRegulationToDownload(
      regulation.id,
      `${regulation.name}.pdf`,
    );
    setDownloading(false);
    const linkClick = document.createElement('a');
    linkClick.href = url;
    linkClick.download = `${regulation.name}.pdf`;
    document.body.appendChild(linkClick);
    linkClick.click();
    document.body.removeChild(linkClick);
  }, [regulation]);

  useEffect(() => {
    if (!campaign?.id) return;
    getRegulation(campaign.id).then(data => setRegulation(data));
  }, [campaign]);

  return (
    <Container>
      <h4>Regulamento</h4>
      {regulation && (
        <RegulationContent type="primary">
          {parser(regulation.content || '')}
        </RegulationContent>
      )}
      <RegulationDownload
        type="button"
        disabled={downloading}
        onClick={handleDownloadClick}
      >
        <ReactSVG src={pdfIcon} />
        Download Regulamento (PDF)
      </RegulationDownload>
      {!isViewing && (
        <Button
          type="button"
          buttonRole="primary"
          className="_actionButton"
          onClick={handleButtonClick}
          loading={loading}
        >
          Próximo
        </Button>
      )}
    </Container>
  );
};

export default Regulation;
