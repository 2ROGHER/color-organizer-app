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
  selectColors,
  selectFilters,
  (colors: Color[], filters: IFilter<string>) => {
    // TODO ("Implement strong algorithm fitler here to filter the task by the [main] state")
    if (!colors || !filters) {
      console.warn('No hay colores o filtros definidos'); // TODO: implement the (banners) to show the client the error
      return [];
    }

    if (filters.filteredItems.length) {
      return colors.filter((c: Color) =>
        filters.filteredItems.includes(c.status)
      );
    }

    if (filters.searchTerm) {
      return colors.filter(
        (c: Color) =>
          c.name.toLowerCase().includes(filters.searchTerm) ||
          c.description.toLowerCase().includes(filters.searchTerm)
      );
    }

    if (!filters.filterValue || filters.filterValue === 'DEFAULT') {
      return colors; // dont apply any filter with default value with 'DEFAULT'
    }


    return colors.filter((c: Color) => c.status === filters.filterValue);
  }
);
