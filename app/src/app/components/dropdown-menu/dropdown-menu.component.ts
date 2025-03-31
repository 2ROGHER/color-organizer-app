import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColorsActions } from '../../ngrx/actions';
import { Observable } from 'rxjs';
import Color from '../../models/domain/color.model';
import { FilterActions } from '../../ngrx/actions/filters.actions';
import { ColorStatus } from '../../models/enums/color-status.interface';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
})
export class DropdownMenuComponent {
  menuItems: String[] = [
    'default',
    'favorite',
    'archived',
    'disabled',
    'unliked',
    'viewed',
    'deleted',
    'updated',
    'changed',
  ];

  selectedValue: string = ColorStatus.DEFAULT;

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
    if (this.type == 'only') {
      this._store.dispatch(
        this._colorSActions.setColorStatus(this.id, this.selectedValue)
      );
    }
    // TODO("This value should be completed letter")
    // if (this.type == 'multiple') {
    //   this._store.dispatch(
    //     this._filterActions.setFilterValue(this.selectedValue.toUpperCase())
    //   );
    // }
  }

  handleFilterColors(t: string) {
    // TODO: ("implement filter here if ")
  }

  emitItemSelected(): void {
    if (this.selectedValue) {
      this.itemSelected.emit(this.selectedValue);
    }
  }
}
