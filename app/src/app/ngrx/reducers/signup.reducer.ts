import { v4 } from 'uuid';
import { IAction, IAuth, ISignUp } from '../../models/interfaces';
import {
  GET_SIGNUP_CREDENTIALS,
  SET_SIGNUP_CREDENTIALS,
} from '../actions-types/signup';

const initialState: ISignUp = {
  id: '',
  name: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  username: '',
  password: '',
};

export const signUpReducer = (
  state: ISignUp = initialState,
  action: IAction<any>
) => {
  switch (action.type) {
    case SET_SIGNUP_CREDENTIALS:
      return {
        ...state,
        id: v4(),
      };

    case GET_SIGNUP_CREDENTIALS:
      return state;

    default:
      return state;
  }
};
