import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCampaign } from 'state/modules/campaigns-manager/selectors';
import { Campaign } from 'services/campaigns-manager/interfaces/Campaign';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from 'components/shared';
import toggleSendMail from 'services/campaigns-manager/toggleSendEmail';
import { setSendMail } from 'state/modules/campaigns-manager/actions';

import { Container, Content, Box } from './styles';

export interface Props {
  handleAction(campaign: Campaign): Promise<void>;
}
const Comunication: React.FC<Props> = ({ handleAction }) => {
  const campaign = useSelector(getCampaign);
  const [loading, setLoading] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = useCallback(async () => {
    setLoading(true);
    await handleAction(campaign);
    setLoading(false);
  }, [campaign, handleAction]);

  useEffect(() => {
    setSendEmail(campaign.sendEmail);
  }, [campaign.sendEmail]);

  const handleToggleSendMail = useCallback(async () => {
    if (!campaign.id) return;
    setSendEmail(item => !item);
    toggleSendMail(campaign.id).then(data => dispatch(setSendMail(data)));
  }, [campaign.id, dispatch]);

  return (
    <Container>
      <h4>Comunicação: {campaign.mechanic?.name}</h4>
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
                <Checkbox
                  color="default"
                  checked={sendEmail}
                  onChange={() => handleToggleSendMail()}
                />{' '}
                Disparo automático do E-mail da campanha
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
