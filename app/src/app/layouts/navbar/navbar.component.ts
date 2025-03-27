import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColorsActions } from '../../ngrx/actions';
import { Store } from '@ngrx/store';
import { ColorStatus } from '../../models/enums/color-status.interface';
import { FilterActions } from '../../ngrx/actions/filters.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input()
  activeForm!: boolean;

  @Output()
  activeFormEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    private _store: Store,
    private _colorsActions: ColorsActions,
    private _filtersActions: FilterActions
  ) {}

  handleActiveForm(): void {
    this.activeFormEmitter.emit(true);
  }

  handleSetFilterValue(s: string): void {
    alert(`the value is : ${s}`);
    this._store.dispatch(this._filtersActions.setFilterValue(s));
  }
}
