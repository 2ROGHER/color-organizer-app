import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilterActions} from '../../../core/state/actions';
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
    private __store: Store,
    private __filterActions: FilterActions,
    private __cd: ChangeDetectorRef
  ) {}

  handleItemSelected(e: string[]): void {
    // TODO("implement the filter acction to filters colors by the array of filter values selected")
    console.log(e);
  }
  
}
