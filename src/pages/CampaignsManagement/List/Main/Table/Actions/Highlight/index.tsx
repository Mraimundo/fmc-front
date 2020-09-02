import React, { useState, useCallback } from 'react';
import { ReactSVG } from 'react-svg';
import StarIcon from 'assets/images/campaigns/star-icon.svg';
import { useToast } from 'context/ToastContext';
import { useCampaignsList } from '../../../../Context';

import { Container } from './style';

interface Props {
  id: number;
  status: boolean;
  campaignId: number;
}

const HighLight: React.FC<Props> = ({ id, status, campaignId }) => {
  const { addHighlight, removeHighlight } = useCampaignsList();
  const [highlight, setHighlight] = useState<boolean>(status);

  const { addToast } = useToast();

  const handleClick = useCallback(
    async (newStatus: boolean) => {
      try {
        if (newStatus) {
          await addHighlight(campaignId);
        } else {
          await removeHighlight(id);
        }
        addToast({
          title: 'Destaque alterado com sucesso',
          type: 'success',
        });
        setHighlight(e => !e);
      } catch (e) {
        addToast({
          title:
            e.response?.data?.message ||
            'Falha ao alterar destaque. Por favor tente novamente',
          type: 'error',
        });
      }
    },
    [addToast, id, addHighlight, removeHighlight],
  );

  return (
    <Container highlight={!!highlight}>
      <ReactSVG src={StarIcon} onClick={() => handleClick(!highlight)} />
    </Container>
  );
};

export default HighLight;
