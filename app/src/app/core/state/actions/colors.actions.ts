/**
 * This actions creators allow us to crete a action and return an object with { type, payload}
 * This class returns an [Action] provided by NgRx
 *
 */

import { Injectable } from '@angular/core';
import { IAction } from '../../../shared/interfaces';
import { Action } from '@ngrx/store';
import {
  CREATE_COLOR,
  FILTER_COLORS,
  GET_ALL_COLORS,
  SET_COLOR_STATUS,
} from '../actions-types/colors';
import { Color } from '../../../domains/color/domain/models';

import { REMOVE_COLOR } from '../actions-types/color';

@Injectable()
export class ColorsActions {
  addColor(c: Color): IAction<any> {
    return {
      type: CREATE_COLOR,
      payload: c,
    };
  }

  getAllColors(): Action {
    return {
      type: GET_ALL_COLORS,
    };
  }

  removeColor(id: string): IAction<string> {
    return {
      type: REMOVE_COLOR,
      payload: id,
    };
  }

  setColorStatus(id: string, s: string): IAction<any> {
    console.log('changing color status ', id, s)
    return {
      type: SET_COLOR_STATUS,
      payload: { id, s },
    };
  }

  filterColorByStatus(s: string): IAction<string> {
    return {
      type: FILTER_COLORS,
      payload: s,
    };
  }

  // TODO: Implement more action here.
}
