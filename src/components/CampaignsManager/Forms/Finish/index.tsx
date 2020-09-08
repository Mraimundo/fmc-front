import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import commentsTransformer, {
  Response as IComment,
} from 'services/campaignsManager/transformers/commentsToCommentsGrid';
import { useSelector } from 'react-redux';
import { getCampaign } from 'state/modules/campaigns-manager/selectors';
import ApprovalBoard from 'components/CampaignsManager/ApprovalBoard';
import { Container, Box, Content, MessageBox, Actions, Button } from './styles';

type Fn = (campaign: Campaign) => Promise<void>;

export interface Props {
  handleSave: Fn;
  handleCancel: Fn;
  handleApprovalRequest: Fn;
}

const Finish: React.FC<Props> = ({
  handleSave,
  handleCancel,
  handleApprovalRequest,
}) => {
  const campaign = useSelector(getCampaign);
  // const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<IComment[]>([]);
  const [actionSelected, setActionSelected] = useState('');

  useEffect(() => {
    setMessages(commentsTransformer(campaign.comments));
  }, [campaign.comments]);

  const handleButtonClick = useCallback(
    async (fn: Fn, actionName: string) => {
      setLoading(true);
      setActionSelected(actionName);
      await fn(campaign);
      setLoading(false);
    },
    [campaign],
  );

  return useMemo(
    () => (
      <Container>
        <Actions>
          <Button
            type="button"
            onClick={() => handleButtonClick(handleSave, 'save')}
            disabled={loading}
            selected={loading && actionSelected === 'save'}
          >
            Salvar
          </Button>
          <Button
            type="button"
            onClick={() => handleButtonClick(handleApprovalRequest, 'approve')}
            disabled={loading}
            selected={loading && actionSelected === 'approve'}
          >
            Solicitar Aprovação
          </Button>
          <Button
            type="button"
            onClick={() => handleButtonClick(handleCancel, 'cancel')}
            disabled={loading}
            selected={loading && actionSelected === 'cancel'}
          >
            Cancelar Campanha
          </Button>
        </Actions>
        <div className="extraPadding">
          <h4>Aprovação</h4>
          <ApprovalBoard approvers={campaign.approvers} />
          <h4>Histórico</h4>
          <Box>
            {messages.map(message => (
              <Content>
                <MessageBox side={message.side}>
                  <span>
                    {`${message.date} - ${message.time} - ${message.name}`}
                  </span>
                  <p>{message.message}</p>
                </MessageBox>
              </Content>
            ))}
          </Box>
        </div>
      </Container>
    ),
    [
      messages,
      campaign.approvers,
      handleSave,
      handleCancel,
      handleApprovalRequest,
      handleButtonClick,
      loading,
      actionSelected,
    ],
  );
};

export default Finish;
