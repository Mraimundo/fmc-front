import React, { useEffect, useState, useCallback } from 'react';
import { useToast } from 'context/ToastContext';
import { useParams } from 'react-router-dom';
import history from 'services/history';
import getCampaign, {
  Campaign as ICampaign,
} from 'services/campaigns/getCampaign';
import { format } from 'date-fns';

import { getRegulationById } from 'services/register/regulation';
import { Regulation } from 'services/register/regulation/interfaces/IRegulation';
import participate from 'services/campaigns/participate';

import { Button } from 'components/shared';
import Campaign from './Campaign';
import RegulationModal from './RegulationModal';
import { Container, Content } from './styles';

interface Params {
  id: string;
}

const List: React.FC = () => {
  const params = useParams<Params>();
  const [campaign, setCampaign] = useState<ICampaign | null>(null);
  const [regulation, setRegulation] = useState<Regulation | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    getCampaign(parseInt(params.id, 0))
      .then(data => {
        setCampaign(data);
      })
      .catch(() => history.push('/'));
    getRegulationById(5).then(data => setRegulation(data));
  }, [params]);

  const handleAcceptRegulation = useCallback(
    async (campaignId: number) => {
      try {
        setLoading(true);
        await participate(campaignId);
        setCampaign(data =>
          data
            ? {
                ...data,
                signed: true,
                acceptedDate: format(new Date(), 'dd/MM/yyyy'),
              }
            : null,
        );
        setModalOpened(false);
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha ao aceitar regulamento. Por favor entre em contato com o suporte',
          type: 'error',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        {campaign && (
          <>
            <Campaign campaign={campaign} />
            {!campaign.signed && (
              <Button
                buttonRole="primary"
                type="button"
                onClick={() => setModalOpened(true)}
              >
                Participar
              </Button>
            )}
          </>
        )}
        {campaign && regulation && (
          <RegulationModal
            isOpen={modalOpened}
            loading={loading}
            onAccept={async () => {
              handleAcceptRegulation(campaign.id);
            }}
            onRequestClose={() => {
              setModalOpened(false);
            }}
            campaign={{ ...campaign, regulationText: regulation.content }}
          />
        )}
      </Content>
    </Container>
  );
};

export default List;
