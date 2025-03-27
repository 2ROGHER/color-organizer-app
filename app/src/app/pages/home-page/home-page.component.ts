import { Component, OnInit } from '@angular/core';
import { ColorsActions } from '../../ngrx/actions/colors.actions';
import Color from '../../models/domain/color.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectFilteredColors } from '../../ngrx/selectors/filters.selector';
import { FilterActions } from '../../ngrx/actions/filters.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  colors$!: Observable<Color[] | undefined>;
  isActive: boolean = true;

  count$!: Observable<number>;

  colorsList$!: Observable<Color[]>;

  constructor(
    private readonly _colorsActions: ColorsActions,
    private readonly _filtersActions: FilterActions,
    private _store: Store
  ) {
    // Select all colors registered at the store.
    // this.count$ = this._store.select(selectColorCount);
    this._store.dispatch(this._filtersActions.setFilterValue("ALL")); // 1.First we need to [dispatch]
    this.colors$ = this._store.select(selectFilteredColors); // We need to select the filter colors
  }

  ngOnInit() {
    console.log('component initialized!');
    console.log('all colors all get', this.colors$);
    // Here we need to (subsribe) to watch or listen the updates at reducer when any chages
    // happens ant reducer.

    //this._store.dispatch(this._colorsActions.getAllColors()); // Then we need to dipatch the action to get all videso from store
    //this.colors$ = this._store.select(selectFilteredColors); // we need to subscribe to (store) to listen changes at reducers' sate
  }
  handleSetActiveForm(e: boolean): void {
    // this.isActive = true;
    this.isActive = e;
  }

  handleSearchTask(s: string): void {
    this._store.dispatch(this._filtersActions.setSearchTerm(s));
  }
}
