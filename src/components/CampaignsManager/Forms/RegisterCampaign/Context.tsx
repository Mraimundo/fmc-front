import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { Campaign } from 'services/campaignsManager/interfaces/Campaign';

interface RegisterFormContextState {
  campaign: Campaign;
  handleSubmitAction(): Promise<void>;
}

const RegisterFormContext = createContext<RegisterFormContextState>(
  {} as RegisterFormContextState,
);

export interface RegisterFormProps {
  initialValues?: Campaign;
  handleAction(campaign: Campaign): Promise<void>;
}
export const RegisterFormProvider: React.FC<RegisterFormProps> = ({
  initialValues,
  children,
  handleAction,
}) => {
  const [campaign, setCampaign] = useState({} as Campaign);

  useEffect(() => {
    if (initialValues) {
      setCampaign(initialValues);
    }
  }, [initialValues]);

  const handleSubmitAction = useCallback(async (): Promise<void> => {
    await handleAction(campaign);
  }, [campaign, handleAction]);

  return (
    <RegisterFormContext.Provider value={{ campaign, handleSubmitAction }}>
      {children}
    </RegisterFormContext.Provider>
  );
};

export const useRegisterForm = (): RegisterFormContextState => {
  const context = useContext(RegisterFormContext);
  if (!context) {
    throw new Error(
      'useRegisterForm must be used within a RegisterProviderProvider',
    );
  }
  return context;
};
