
import { createSelector, createFeatureSelector } from "@ngrx/store";
import { IColorState } from "../../models/interfaces";
import { IFilter } from "../../models/interfaces/filter.interface";
import Color from "../../models/domain/color.model";
import { ColorStatus } from "../../models/enums/color-status.interface";

// Select initial base state from [store] to [filter colors by status]

export const selectColors = createSelector(
  createFeatureSelector<IColorState>("colors"),
  (state: IColorState) => {
    return state?.colors || [];
  }
);
// Select the initial base state from the [store] to [filters status]
export const selectFilters = createFeatureSelector<IFilter>("filters");

export const selectFilteredColors = createSelector(
  selectColors,
  selectFilters,
  (colors: Color[], filters: IFilter) => {
    // TODO ("Implement strong algorithm fitler here to filter the task by the [main] state")
    if (!colors || !filters) {
      console.warn("No hay colores o filtros definidos"); // TODO: implement the (banners) to show the client the error
      return [];
    }

    console.log("Filtro actual:", filters.filterValue);

    if (!filters.filterValue || filters.filterValue === ColorStatus.ALL) {
      return colors; // No aplicar filtro si es 'ALL'
    }

    if (!filters.searchTerm) {
      console.log("entrando al filter by");
      return colors.filter((c: Color) =>
        c.name.includes(filters.searchTerm.toLowerCase())
      );
    } else {
      return colors.filter((c: Color) => c.status === filters.filterValue);
    }
  }
);
