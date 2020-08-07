import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import commentsTransformer, {
  Response as IComment,
} from 'services/campaignsManager/transformers/commentsToCommentsGrid';
import { useSelector } from 'react-redux';
import { getCampaign } from 'state/modules/campaigns-manager/selectors';
import ApprovalBoard from 'components/CampaignsManager/ApprovalBoard';
import { Container, Box, Content, MessageBox, Actions } from './styles';

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

  useEffect(() => {
    setMessages(commentsTransformer(campaign.comments));
  }, [campaign.comments]);

  const handleButtonClick = useCallback(
    async (fn: Fn) => {
      setLoading(true);
      await fn(campaign);
      setLoading(false);
    },
    [campaign],
  );

  return useMemo(
    () => (
      <Container>
        <Actions>
          <button type="button" onClick={() => handleButtonClick(handleSave)}>
            Salvar
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick(handleApprovalRequest)}
          >
            Solicitar Aprovação
          </button>
          <button type="button" onClick={() => handleButtonClick(handleCancel)}>
            Cancelar Campanha
          </button>
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
    ],
  );
};

export default Finish;
