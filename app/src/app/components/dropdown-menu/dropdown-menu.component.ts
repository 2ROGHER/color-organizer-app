import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorsActions } from '../../ngrx/actions';
import { Observable } from 'rxjs';
import Color from '../../models/domain/color.model';
import { FilterActions } from '../../ngrx/actions/filters.actions';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {
  menuItems: String[] = [
    'all',
    'favorite',
    'archived',
    'disabled',
    'unliked',
    'viewed',
    'updated',
    'changed',
  ];

  selectedValue: string = 'ALL';

  @Input()
  id!: string;

  @Input()
  type: string = 'only';

  @Output()
  itemSelected: EventEmitter<string> = new EventEmitter();

  // values$!: Observable<Color[]>;

  constructor(
    private readonly _store: Store,
    private _colorSActions: ColorsActions,
    private _filterActions: FilterActions
  ) {}

  onChangeValue(e: Event) {
    this.selectedValue = (e.target as HTMLInputElement).value;
    // Here we need to [dispatch] the acction to set the [color status]
    console.log('the values is', this.selectedValue);
    if (this.type == 'only') {
      this._store.dispatch(
        this._colorSActions.setColorStatus(this.id, this.selectedValue)
      );
    }
    if (this.type == 'multiple') {
      this._store.dispatch(
        this._filterActions.setFilterValue(this.selectedValue.toUpperCase())
      );
    }
  }

  handleFilterColors(t: string) {
    // TODO: ("implement filter here if ")
  }

  emitItemSelected(): void {
    console.log('itemSelected');
    if (this.selectedValue) {
      this.itemSelected.emit(this.selectedValue);
    }
  }
}
