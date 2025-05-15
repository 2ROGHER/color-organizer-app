import { ActionReducer } from '@ngrx/store';
import { Color, Category } from '../../../domains/color/domain/models';
import { CREATE_COLOR, SET_COLOR_STATUS } from '../actions-types/colors';

import { REMOVE_COLOR } from '../actions-types/color';
import { IAction } from '../../../shared/interfaces';
import { ColorStatus } from '../../../domains/color/domain/enums';
const initialState: {} | Color = {};

/**
 * This reducer is used to handle the [color] state
 * @param state
 * @param action
 * @returns
 */
export const colorReducer: ActionReducer<any | {}, IAction<any>> = (
  // Here [ActionReducer] is a interface that is the (firm) of this method
  state = initialState,
  action: IAction<any>
) => {
  // TODO: remove any later.
  switch (action.type) {
    case CREATE_COLOR:
      // return new Color('', '', '', new Category(''), '', '', 2, 2, '', '');
      const {
        id,
        name,
        category,
        hexValue,
        description,
        stars,
        rate,
        status,
        createdAt,
        updatedAt,
      } = action.payload;
      return new Color(
        id,
        name,
        new Category(category),
        hexValue,
        description,
        stars,
        rate,
        status && ColorStatus.ACTIVE,
        createdAt,
        updatedAt
      );

    case SET_COLOR_STATUS:
      return state.id === action.payload.id
        ? new Color(
            state.id,
            state.name,
            state.category,
            state.hexValue,
            state.description,
            state.stars,
            state.rate,
            action.payload.s.toUpperCase(),
            state.createdAt,
            state.updatedAt
          )
        : state;
    // ? ({...state, _status: (action.payload.s).toUpperCase()}) : state;

    case REMOVE_COLOR:
      return state._id !== action.payload;

    default:
      return state;
  }
};
