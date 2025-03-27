import { IAction } from '../../models/interfaces';
import { IFilter } from '../../models/interfaces/filter.interface';
import { SET_FILTER_VALUE, SET_SEARCH_TERM } from '../actions-types/filters';

const initialState: IFilter<string> = {
  searchTerm: '',
  filterValue: '',
  sortBy: '',
};

export const filterReducer = (
  state: IFilter<string> = initialState,
  action: IAction<string>
) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      console.log(`setting searcht term at ${action.payload}`)
      return { ...state, searchTerm: action.payload };

    case SET_FILTER_VALUE:
      return { ...state, filterValue: action.payload };

    default:
      return state;
  }
};
