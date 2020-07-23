import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import { Campaign, Goal } from 'services/campaignsManager/interfaces/Campaign';

interface RegisterFormContextState {
  campaign: Campaign;
  handleAction(): Promise<void>;
  addGoal(data: Goal): void;
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
    console.log(campaign);
    return;
    await handleAction(campaign);
  }, [handleAction, campaign]);

  const addGoal = useCallback((goal: Goal): void => {
    setCampaign(state => {
      const goals = state.goals.filter(
        item => item.product.id !== goal.product.id,
      );
      goals.push(goal);
      state.goals = goals.sort((item1, item2) =>
        item1.product.id > item2.product.id ? 1 : -1,
      );
      return state;
    });
  }, []);

  return (
    <RegisterFormContext.Provider
      value={{ campaign, handleAction: handleSubmitAction, addGoal }}
    >
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
