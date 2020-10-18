import React, { useCallback, useState } from 'react';
import { ReactSVG } from 'react-svg';
import onIcon from 'assets/images/campaigns/on-icon.svg';
import offIcon from 'assets/images/campaigns/off-icon.svg';
import { useToast } from 'context/ToastContext';
import { useCampaignsList } from '../../../../Context';

import { Container, StyledLoader } from './style';

interface Props {
  id: number;
  activated: boolean;
  highlightId: number;
}

const Active: React.FC<Props> = ({
  id,
  activated: _activated,
  highlightId,
}) => {
  const { togglePublishedStatus, removeHighlight } = useCampaignsList();
  const [activated, setActivated] = useState<boolean>(_activated);

  const [loading, setLoading] = useState(false);

  const { addToast } = useToast();

  const handleClick = useCallback(async () => {
    try {
      setLoading(true);
      await togglePublishedStatus(id);
      addToast({
        title: 'Status alterado com sucesso',
        type: 'success',
      });
      setActivated(e => {
        if (e) {
          removeHighlight(highlightId);
        }
        return !e;
      });
    } catch (e) {
      addToast({
        title:
          e.response?.data?.message ||
          'Falha ao alterar status. Por favor tente novamente',
        type: 'error',
      });
    }
    setLoading(false);
  }, [addToast, togglePublishedStatus, id, highlightId, removeHighlight]);

  return (
    <Container>
      {loading ? (
        <StyledLoader type="ThreeDots" height={25} width={25} />
      ) : (
        <ReactSVG src={activated ? onIcon : offIcon} onClick={handleClick} />
      )}
    </Container>
  );
};

export default Active;
