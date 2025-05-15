import { Injectable } from '@angular/core';
import { SET_COLOR_STATUS } from '../actions-types';
import { IAction } from '../../../shared/interfaces';

@Injectable()
export class ColorActions {
  addColorStatus(id: string, s: string): IAction<any> {
    return {
      type: SET_COLOR_STATUS,
      payload: { id, s },
    };
  }
}
