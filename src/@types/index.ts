export type ApiErrors = {
  message: string;
  code: string;
};

export interface ActionCreator<Type> {
  type: Type;
  meta?: any;
}

export interface ActionCreatorFailure<Type extends string = string>
  extends ActionCreator<Type> {
  payload: {
    errors: ApiErrors[];
  };
}

export interface ActionCreatorPayload<Type, State> extends ActionCreator<Type> {
  payload: State;
}

export type ActionCreatorFailureType<
  TCreatedAction extends ActionCreatorFailure<string> = ActionCreatorFailure<
    string
  >
> = (errors: ApiErrors[]) => TCreatedAction;

export type FetchState = {
  errors?: ApiErrors[];
  isFetching: boolean;
};
