export interface ActionCreator<Type> {
  type: Type;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any;
}

export interface ActionCreatorFailure<Type extends string = string>
  extends ActionCreator<Type> {
  payload: {
    error: string;
  };
}

export interface ActionCreatorPayload<Type, State> extends ActionCreator<Type> {
  payload: State;
}

export type ActionCreatorFailureType<
  TCreatedAction extends ActionCreatorFailure<string> = ActionCreatorFailure<
    string
  >
> = (error: string) => TCreatedAction;

export type FetchState = {
  error?: string;
  isFetching: boolean;
};
