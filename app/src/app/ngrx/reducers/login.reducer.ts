import { IAction, IAuth } from '../../models/interfaces';

const initialState: IAuth = {
  username: '',
  password: '',
};

export const loginReducer = (
  state: IAuth = initialState,
  action: IAction<any>
) => {
  switch (action.type) {
    default:
      return state;
  }
};

