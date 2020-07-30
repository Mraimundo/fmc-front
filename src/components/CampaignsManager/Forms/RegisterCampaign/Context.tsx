import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import {
  Campaign,
  Goal,
  Mechanic,
  Audience,
} from 'services/campaignsManager/interfaces/Campaign';
import { newEmptyCampaignObject } from 'services/campaignsManager';

type PointsFieldsNames =
  | 'affordPoints'
  | 'complementaryCrmBudget'
  | 'complementaryAffordPoints'
  | 'complementaryLocalBudget'
  | 'expectedSellIn'
  | 'expectedSellOut';

type TextFieldsNames = 'observation' | 'title';

interface RegisterFormContextState {
  campaign: Campaign;
  handleAction(): Promise<void>;
  addGoal(data: Goal): void;
  removeGoal(data: Goal): void;
  setMechanic(mechanic: Mechanic | null): void;
  addAudience(audience: Audience): void;
  removeAudience(audience: Audience): void;
  setStartDate(value: Date | null): void;
  setEndDate(value: Date | null): void;
  setPrizeName(value: string): void;
  setPrizeDescription(value: string): void;
  setPointsValue(fieldName: PointsFieldsNames, value: number): void;
  setTextsValue(fieldName: TextFieldsNames, value: string): void;
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
  const [campaign, setCampaign] = useState(newEmptyCampaignObject());

  useEffect(() => {
    if (initialValues) {
      setCampaign(initialValues);
    }
  }, [initialValues]);

  const handleSubmitAction = useCallback(async (): Promise<void> => {
    await handleAction(campaign);
  }, [handleAction, campaign]);

  const addGoal = useCallback((goal: Goal): void => {
    setCampaign(state => {
      const goals = state.goals.filter(
        item => item.product.id !== goal.product.id,
      );
      goals.push(goal);
      return {
        ...state,
        goals: goals.sort((item1, item2) =>
          item1.product.id > item2.product.id ? 1 : -1,
        ),
      };
    });
  }, []);

  const removeGoal = useCallback((goal: Goal): void => {
    setCampaign(state => {
      const goals = state.goals.filter(
        item => item.product.id !== goal.product.id,
      );
      return {
        ...state,
        goals: goals.sort((item1, item2) =>
          item1.product.id > item2.product.id ? 1 : -1,
        ),
      };
    });
  }, []);

  const setMechanic = useCallback((mechanic: Mechanic | null): void => {
    setCampaign(state => ({ ...state, mechanic }));
  }, []);

  const addAudience = useCallback((audience: Audience): void => {
    setCampaign(state => {
      const newData = state.audience.filter(
        item => item.customer.id !== audience.customer.id,
      );
      newData.push(audience);
      return {
        ...state,
        audience: newData.sort((item1, item2) =>
          item1.customer.id > item2.customer.id ? 1 : -1,
        ),
      };
    });
  }, []);

  const removeAudience = useCallback((audience: Audience): void => {
    setCampaign(state => {
      const newData = state.audience.filter(
        item => item.customer.id !== audience.customer.id,
      );
      return {
        ...state,
        audience: newData.sort((item1, item2) =>
          item1.customer.id > item2.customer.id ? 1 : -1,
        ),
      };
    });
  }, []);

  const setStartDate = useCallback((value: Date | null) => {
    setCampaign(state => ({ ...state, startDate: value }));
  }, []);

  const setEndDate = useCallback((value: Date | null) => {
    setCampaign(state => ({ ...state, endDate: value }));
  }, []);

  const setPrizeName = useCallback((value: string) => {
    setCampaign(state => ({
      ...state,
      prize: { ...state.prize, name: value },
    }));
  }, []);

  const setPrizeDescription = useCallback((value: string) => {
    setCampaign(state => ({
      ...state,
      prize: { ...state.prize, description: value },
    }));
  }, []);

  const setPointsValue = useCallback(
    (fieldName: PointsFieldsNames, value: number): void => {
      setCampaign(state => ({ ...state, [fieldName]: value }));
    },
    [],
  );

  const setTextsValue = useCallback(
    (fieldName: TextFieldsNames, value: string): void => {
      setCampaign(state => ({ ...state, [fieldName]: value }));
    },
    [],
  );

  return (
    <RegisterFormContext.Provider
      value={{
        campaign,
        handleAction: handleSubmitAction,
        addGoal,
        removeGoal,
        setMechanic,
        addAudience,
        removeAudience,
        setStartDate,
        setEndDate,
        setPrizeName,
        setPrizeDescription,
        setPointsValue,
        setTextsValue,
      }}
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
