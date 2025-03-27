import { IAction, ISignUp } from '../../models/interfaces';
import {
  GET_SIGNUP_CREDENTIALS,
  SET_SIGNUP_CREDENTIALS,
} from '../actions-types/signup';

export class SignUpAction {
  constructor() {}

  setSignUpCredentials(c: ISignUp): IAction<ISignUp> {
    return {
      type: SET_SIGNUP_CREDENTIALS,
      payload: c,
    };
  }

  getSignUpCredentials() {
    return {
      type: GET_SIGNUP_CREDENTIALS,
    };
  }
}
