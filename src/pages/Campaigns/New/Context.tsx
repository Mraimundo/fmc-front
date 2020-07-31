import React, { createContext, useState, useContext, useCallback } from 'react';
import { createNewCampaign } from 'services/campaignsManager';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { CreateNewCampaignDTO } from 'services/campaignsManager/dtos';
import { campaignToCreateNewCampaignDTO } from 'services/campaignsManager/transformers';
import { useToast } from 'context/ToastContext';
import history from 'services/history';

export interface NewCampaignContextState {
  handleSave(data: Campaign): Promise<void>;
}

const NewCampaignContext = createContext<NewCampaignContextState>(
  {} as NewCampaignContextState,
);

export const NewCampaignProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

  const handleSave = useCallback(
    async (data: Campaign) => {
      const dto: CreateNewCampaignDTO = campaignToCreateNewCampaignDTO(data);
      try {
        await createNewCampaign(dto);
        addToast({
          title: 'Campanha requisitada com sucesso',
          type: 'success',
        });
        history.push('/gerenciamento-de-campanhas/lista');
      } catch (e) {
        addToast({
          title:
            e?.response?.data?.message ||
            'Falha ao registrar campanha. Por favor contate o suporte.',
          type: 'error',
        });
      }
    },
    [addToast],
  );

  return (
    <NewCampaignContext.Provider value={{ handleSave }}>
      {children}
    </NewCampaignContext.Provider>
  );
};

export const useNewCampaign = (): NewCampaignContextState => {
  const context = useContext(NewCampaignContext);
  if (!context) {
    throw new Error(
      'useNewCampaign must be used within a ResultsProviderProvider',
    );
  }
  return context;
};
