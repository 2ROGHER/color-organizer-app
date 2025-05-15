import { IAction } from '../../../shared/interfaces';
import { IAuth } from '../../../domains/auth/domain/interfaces';
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

