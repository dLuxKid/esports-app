export type authContextType = {
  user: any;
  authIsReady: boolean;
  dispatch: React.Dispatch<authActions>;
};

export interface authState {
  user: any;
  authIsReady: boolean;
}

export interface authActions {
  type: string;
  payload?: any;
}
