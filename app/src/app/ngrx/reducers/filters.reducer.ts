import { IAction } from '../../models/interfaces';
import { IFilter } from '../../models/interfaces/filter.interface';
import { SET_FILTER_VALUE, SET_SEARCH_TERM } from '../actions-types/filters';

const initialState: IFilter = {
  searchTerm: '',
  filterValue: '',
  sortBy: '',
};

export const filterReducer = (
  state: IFilter = initialState,
  action: IAction<string | any>
) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };

    case SET_FILTER_VALUE:
      return { ...state, filterValue: action.payload };

    default:
      return state;
  }
};
