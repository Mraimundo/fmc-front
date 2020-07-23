import React, { createContext, useState, useContext, useCallback } from 'react';
import { createNewCampaign } from 'services/campaignsManager';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';
import { CreateNewCampaignDTO } from 'services/campaignsManager/dtos';
import { campaignToCreateNewCampaignDTO } from 'services/campaignsManager/transformers';

export interface NewCampaignContextState {
  test: string;
  handleSave(data: Campaign): Promise<void>;
}

const NewCampaignContext = createContext<NewCampaignContextState>(
  {} as NewCampaignContextState,
);

export const NewCampaignProvider: React.FC = ({ children }) => {
  const [test, setTest] = useState('');

  const handleSave = useCallback(async (data: Campaign) => {
    const dto: CreateNewCampaignDTO = campaignToCreateNewCampaignDTO(data);
    try {
      await createNewCampaign(dto);
    } catch (e) {
      console.log(e);
      console.log('add a message here later');
    }
  }, []);

  return (
    <NewCampaignContext.Provider value={{ test, handleSave }}>
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
