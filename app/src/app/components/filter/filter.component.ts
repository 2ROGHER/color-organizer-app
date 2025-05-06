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
  // Basic filter options to sort the list of colors.
    items: string[] = [
      'title',
      'description',
      'color',
      'category',
      'stars',
      'rate',
      'updatedAt',
      'createdAt',
      'status',
    ];

  constructor(
    private _store: Store,
    private _filterActions: FilterActions,
    private cd: ChangeDetectorRef
  ) {}

  handleItemSelected(e: string[]): void {
    // TODO("implement the filter acction to filters colors by the array of filter values selected")
    console.log(e);
  }
}
