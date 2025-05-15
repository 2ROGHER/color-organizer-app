import { IAction } from '../../../shared/interfaces';
import { ISignUp } from '../../../domains/auth/domain/interfaces';
import {
  GET_SIGNUP_CREDENTIALS,
  SET_SIGNUP_CREDENTIALS,
} from '../actions-types/signup';

import { Injectable } from '@angular/core';

@Injectable()
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
