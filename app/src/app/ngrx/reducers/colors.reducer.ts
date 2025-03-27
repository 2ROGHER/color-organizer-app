/**
 * This [reducer] is specially a Singleton object, wich is a reference to some data structure.
 * This [state] is update trought [pure] functions, wich are called [reducer functions]. These functions
 * returns a [new state]
 */

import { Injectable } from '@angular/core';
import { Action, ActionReducer } from '@ngrx/store';
import Color from '../../models/domain/color.model';
import {
  CREATE_COLOR,
  FILTER_COLORS,
  GET_ALL_COLORS,
  SET_COLOR_STATUS,
} from '../actions-types/colors';
import { IAction } from '../../models/interfaces/action.inteface';
import { colorReducer } from './index';
import { Category } from '../../models/domain/category.model';
import { IColors } from '../../models/interfaces/colors.interface';
import { REMOVE_COLOR } from '../actions-types/color';
import { ColorStatus } from '../../models/enums/color-status.interface';
import { v4 } from 'uuid';
import { IColorState } from '../../models/interfaces';
Category;
var initialState: IColorState = {
  colors: [
    new Color(
      v4(),
      'Azul',
      new Category('Tech'),
      '#0000FF',
      'Representa tecnología, confianza y estabilidad.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'Rojo',

      new Category('Pasión'),
      '#FF0000',
      'Simboliza energía, pasión y amor.',
      2,
      2,
      ColorStatus.ALL,

      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),

      'Verde',

      new Category('Naturaleza'),
      '#008000',
      'Evoca naturaleza, frescura y crecimiento.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'Amarillo',

      new Category('Alegría'),
      '#FFFF00',
      'Refleja felicidad, optimismo y creatividad.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'orange',
      new Category('Energía'),
      '#FFA500',
      'Simboliza entusiasmo, determinación y éxito.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'purple',
      new Category('Lujo'),
      '#800080',
      'Asociado a la realeza, creatividad y sabiduría.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'pink',
      new Category('Romance'),
      '#FFC0CB',
      'Representa dulzura, amor y ternura.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'black',
      new Category('Elegancia'),
      '#000000',
      'Asociado a la sofisticación, poder y misterio.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'white',
      new Category('Paz'),
      '#FFFFFF',
      'Simboliza pureza, paz y limpieza.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'gray',
      new Category('Neutralidad'),
      '#808080',
      'Denota equilibrio, sobriedad y modernidad.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'turquoise',
      new Category('Relajación'),
      '#40E0D0',
      'Inspiración, tranquilidad y frescura.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'cyan',
      new Category('Innovación'),
      '#00FFFF',
      'Refleja creatividad, modernidad y dinamismo.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'magenta',
      new Category('Expresión'),
      '#FF00FF',
      'Simbología de originalidad y expresividad.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'turquoise',
      new Category('Relajación'),
      '#40E0D0',
      'Inspiración, tranquilidad y frescura.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'cyan',
      new Category('Innovación'),
      '#00FFFF',
      'Refleja creatividad, modernidad y dinamismo.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
    new Color(
      v4(),
      'magenta',
      new Category('Expresión'),
      '#FF00FF',
      'Simbología de originalidad y expresividad.',
      2,
      2,
      ColorStatus.ALL,
      '2025-03-03',
      '2025-03-03'
    ),
  ],
};

/**
 * This is a pure functio that, receive as arguments to [state]: Color[] and as [Action]: IAction<Color>
 * @param state
 * @param action
 * @returns
 */
export const colorsReducer: ActionReducer<IColorState, IAction<Color | any>> = (
  state: IColorState = initialState,
  action: IAction<Color | any>
) => {
  switch (action.type) {
    case CREATE_COLOR:
      return {
        ...state,
        colors: [...state.colors, colorReducer({}, action)],
      };

    case REMOVE_COLOR:
      return {
        ...state,
        colors: [...state.colors.filter((c: Color) => colorReducer(c, action))],
      };

    case SET_COLOR_STATUS:
      return {
        ...state,
        colors: [...state.colors.map((c: Color) => colorReducer(c, action))],
      };
    case GET_ALL_COLORS:
      return { ...state };

    default:
      return state;
  }
};
