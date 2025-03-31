import { Injectable } from '@angular/core';
import { IAction } from '../../models/interfaces';
import { SET_FILTER_VALUE, SET_FILTERS_VALUES, SET_SEARCH_TERM } from '../actions-types/filters';

@Injectable()
export class FilterActions {
  /**
   * This method is used to set the [search term] to filter the colors by the list items.

   * @param s
   * @returns
   */
  setSearchTerm(s: string): IAction<string> {
    console.log('the term value is ', s);
    return {
      type: SET_SEARCH_TERM,
      payload: s,
    };
  }

  /**
   * This method is responsible for set the [colors status] to filter the colors by the list items by the
   * [colors ] status.
   * @param s
   * @returns
   */
  setFilterValue(s: string): IAction<string> {
    return {
      type: SET_FILTER_VALUE,
      payload: s,
    };
  }

  setFiltersValuesArray(s: string): IAction<string> {
    return {
      type: SET_FILTERS_VALUES,
      payload: s,
    }
  }
 }
