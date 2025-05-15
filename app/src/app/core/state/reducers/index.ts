/**
 * Estas funciones son [puras] y son de tipo [ActionReducer]
 * El [store] esta compuesto de varios [reducers]
 * Por cada [reducer], una instanci de [Reducer class ] es creado el cual esta basado en [BehaviorSubject]
 *
 */
// import { combineReducers } from '@ngrx/store';
// import { ActionReducer } from '@ngrx/store';
// import Color from '../../models/domain/color.model';
// import { Action } from '@ngrx/store';
// import { colorsReducer } from './colors.reducer';

// const rootReducer = combineReducers({
//   colors: colorsReducer as ActionReducer<Color[], Action<string>>, // ActionReducer<S, A>
// });

export * from './color.reducer';
export * from './colors.reducer';
export * from './login.reducer';
export * from './signup.reducer';
export * from './filters.reducer';
