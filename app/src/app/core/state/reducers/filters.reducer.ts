import { IAction } from '../../../shared/interfaces';
import { IFilter } from '../../../shared/interfaces';
import { SET_FILTER_VALUE, SET_FILTERS_VALUES, SET_SEARCH_TERM } from '../actions-types/filters';

const initialState: IFilter<string> = {
  searchTerm: '',
  filterValue: '',
  sortBy: '',
  filteredItems: []
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

    case SET_FILTERS_VALUES:
      return {
        ...state,
        filteredItems: state.filteredItems.includes(action.payload) ? (
          state.filteredItems.filter(i => i!== action.payload)
        ): (
          [...state.filteredItems, action.payload]
        )
      }
    default:
      return state;
  }
};
