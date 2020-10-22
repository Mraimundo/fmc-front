import React, { useMemo } from 'react';
import { useAuth } from 'context/AuthContext';
import { CRM, GRM, GRV, RTC, KAM } from 'config/constants';
import history from 'services/history';
import { useCampaignsList } from '../../Context';

import { Container, Content, Box, Action, AddButton } from './styles';

const allowRolesToAddCampaigns = [CRM, GRM, GRV, RTC, KAM];

const Resume: React.FC = () => {
  const { resume } = useCampaignsList();
  const { participant } = useAuth();

  return useMemo(
    () => (
      <Container>
        <h4>Campanhas especiais</h4>
        <Content>
          <Box>
            <h6>Campanhas</h6>
            {resume.map(item => (
              <div key={`${item.status.id}-${item.status.name}`}>
                <h5>{item.status.name}</h5>
                <span />
                <h5>{item.count}</h5>
              </div>
            ))}
          </Box>
          {allowRolesToAddCampaigns.includes(participant.profile_value) && (
            <Action>
              <span>Nova campanha</span>
              <AddButton
                type="button"
                onClick={() =>
                  history.push('/gerenciamento-de-campanhas/registrar')
                }
              />
            </Action>
          )}
        </Content>
      </Container>
    ),
    [resume],
  );
};

export default Resume;
