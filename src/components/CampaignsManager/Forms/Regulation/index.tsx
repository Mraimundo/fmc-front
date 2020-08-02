import React, { useState, useCallback, useEffect } from 'react';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { useSelector } from 'react-redux';
import { getCampaign } from 'state/modules/campaigns-manager/selectors';
import getRegulation, {
  Response as IRegulation,
} from 'services/campaignsManager/getRegulation';
import { Button } from 'components/shared';
import { ReactSVG } from 'react-svg';
import parser from 'html-react-parser';
import pdfIcon from 'assets/images/pdf.svg';

import { Container, RegulationContent, RegulationDownload } from './styles';

export interface Props {
  handleAction(campaign: Campaign): Promise<void>;
}
const Regulation: React.FC<Props> = ({ handleAction }) => {
  const campaign = useSelector(getCampaign);
  const [loading, setLoading] = useState(false);
  const [regulation, setRegulation] = useState<IRegulation | null>(null);

  const handleButtonClick = useCallback(async () => {
    setLoading(true);
    await handleAction(campaign);
    setLoading(false);
  }, [campaign, handleAction]);

  useEffect(() => {
    getRegulation().then(data => setRegulation(data));
  }, []);

  return (
    <Container>
      <h4>Regulamento</h4>
      {regulation && (
        <RegulationContent type="primary">
          {parser(regulation.content || '')}
        </RegulationContent>
      )}
      <RegulationDownload type="button">
        <ReactSVG src={pdfIcon} />
        Download Regulamento (PDF)
      </RegulationDownload>
      <Button
        type="button"
        buttonRole="primary"
        className="_actionButton"
        onClick={handleButtonClick}
        loading={loading}
      >
        Próximo
      </Button>
    </Container>
  );
};

export default Regulation;
