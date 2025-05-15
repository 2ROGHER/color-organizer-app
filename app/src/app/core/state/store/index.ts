/**
 * This is the main store that holds the complet app state.
 * This is too a Singleton object, wich holds the app state.
 */
import { colorsReducer } from '../reducers/index';
import { ActionReducerMap } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import { filterReducer } from '../reducers/filters.reducer';
import { AppState, IFilter } from '../../../shared/interfaces';
import { Color } from '../../../domains/color/domain/models';
// const rootReducer = combineReducers({
//   colors: colorsReducer as ActionReducer<Color[], Action<string>>, // ActionReducer<S, A>
// });

/**
 * [Important note]:
 * We need to know that in [ngrx/store] doen't an store as the Redux pattern.
 * Here only exists only tree main strucutes [Actions, Reducers, and Dispatchers]. There is not [Store]
 * Here we need to emulate the [createMethod] existed in other technologies as React.
 */
export const rootReducer: ActionReducerMap<AppState> = {
  // colors: colorsReducer as ActionReducer<Color[], IAction<Color>>,
  colors: colorsReducer as unknown as ActionReducer<Color[], Action<string | any>>, // TODO("fixed this letter")
  filters: filterReducer as ActionReducer<IFilter<string>, Action<string>>,
};
