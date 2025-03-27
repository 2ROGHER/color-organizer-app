import { ActionReducer } from '@ngrx/store';
import Color from '../../models/domain/color.model';
import { IAction } from '../../models/interfaces/action.inteface';
import { CREATE_COLOR, SET_COLOR_STATUS } from '../actions-types/colors';
import { Category } from '../../models/domain/category.model';

import { v4 } from 'uuid';
import { REMOVE_COLOR } from '../actions-types/color';
import { ColorStatus } from '../../models/enums/color-status.interface';
interface ColorState {
  // TODO: here we need to define the state to this reducer
}

const initialState: {} | Color = {};

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
        _,
        name,
        color,
        category,
        hexValue,
        description,
        stars,
        rate,
        createdAt,
        updateAt,
      } = action.payload;
      return new Color(
        v4(),
        name,
        new Category(category),
        hexValue,
        description,
        stars,
        rate,
        ColorStatus.ALL,
        createdAt,
        updateAt
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
          (action.payload.s).toUpperCase(),
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
