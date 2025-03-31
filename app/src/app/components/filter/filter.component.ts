import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterActions } from '../../ngrx/actions/filters.actions';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterValue: string = '';

  constructor(
    private _store: Store,
    private _filterActions: FilterActions,
    private cd: ChangeDetectorRef
  ) {}

  handleItemSelected(e: string): void {
    console.log('value handled', e);
    if (e) {
      this.filterValue = e;
      this.cd.detectChanges();

      // dispatch the action to filter the tasks
      this._store.dispatch(this._filterActions.setFiltersValuesArray(e.toUpperCase()));
    }
  }
}
