import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IColorState } from '../../models/interfaces';
import { IFilter } from '../../models/interfaces/filter.interface';
import Color from '../../models/domain/color.model';
import { ColorStatus } from '../../models/enums/color-status.interface';
import { filter } from 'rxjs';

// Select initial base state from [store] to [filter colors by status]

export const selectColors = createSelector(
  createFeatureSelector<IColorState>('colors'),
  (state: IColorState) => {
    return state?.colors || [];
  }
);
// Select the initial base state from the [store] to [filters status]
export const selectFilters = createFeatureSelector<IFilter<string>>('filters');

export const selectFilteredColors = createSelector(
  selectColors, // select the [colors] state by the reducers
  selectFilters, // Select the [filters] state by the reducers
  (colors: Color[], filters: IFilter<string>) => {
    // 1. If the array of colors is empty, return an empty array
    if (!colors.length) return [];

    // 1.1. Copy the original array to do filter acctions
    let filteredColors = [...colors];

    // 2. Filter colors by the filter values ["DELETED", "ARCHIVED", "DISABLED", "UNLIKED", "VIEWED"] etc.
    if (filters.filteredItems.length && !filters.filterValue && !filters.searchTerm) {
      return filteredColors.filter((c: Color) =>
        filters.filteredItems.includes(c.status)
      );
    }

    // 3. filter colors by the only a filter value "DELETED", "FAVORITE", and son on.
    if (filters.filterValue && !filters.searchTerm) {
      return filteredColors.filter(
        (c: Color) => c.status == filters.filterValue
      );
    }

    // 4. Filter colors by the search term value, disptched by the user search
    if (filters.searchTerm) {
      return filteredColors.filter((c: Color) =>
        c.name.toLowerCase().includes(filters.searchTerm) ||
        c.description.toLowerCase().includes(filters.searchTerm) ||
        c.category.name.toLowerCase().includes(filters.searchTerm)
      );
    }

    return filteredColors.filter((c: Color) => c.status !== "DELETED");

  }
);
