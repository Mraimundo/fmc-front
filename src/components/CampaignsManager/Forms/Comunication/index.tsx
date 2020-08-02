import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getCampaign } from 'state/modules/campaigns-manager/selectors';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'components/shared';

import { Container, Content, Box } from './styles';

export interface Props {
  handleAction(campaign: Campaign): Promise<void>;
}
const Comunication: React.FC<Props> = ({ handleAction }) => {
  const campaign = useSelector(getCampaign);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = useCallback(async () => {
    setLoading(true);
    await handleAction(campaign);
    setLoading(false);
  }, [campaign, handleAction]);

  return (
    <Container>
      <h4>Comunicação: Bateu Levou</h4>
      <Content>
        <div>
          <div>
            <Box>
              <img
                src={campaign.mechanic?.homeImage}
                alt="Imagem que exibirá na Home"
              />
              <span>Imagem Home - Destaques</span>
            </Box>
          </div>
          <div>
            <Box>
              <img
                src={campaign.mechanic?.emailImage}
                alt="Imagem exemplo do E-mail"
              />
              <span>
                <Checkbox color="default" /> Disparo automático do E-mail da
                campanha
              </span>
            </Box>
          </div>
        </div>
        <div>
          <div>
            <Box>
              <img
                src={campaign.mechanic?.internalImage}
                alt="Imagem interna da Campanha"
              />
              <span>Imagem da campanha - Interna</span>
            </Box>
          </div>
          <div>
            <Box>
              <img
                src={campaign.mechanic?.campaignListImage}
                alt="Imagem da Lista de campanhas"
              />
              <span>Imagem da Lista de Campanhas</span>
            </Box>
          </div>
        </div>
      </Content>
      <Button
        type="button"
        buttonRole="primary"
        onClick={handleButtonClick}
        loading={loading}
      >
        Próximo
      </Button>
    </Container>
  );
};

export default Comunication;
