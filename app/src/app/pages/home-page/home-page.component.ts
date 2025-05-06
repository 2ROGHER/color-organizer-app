import { Component, OnInit } from '@angular/core';
import { ColorsActions } from '../../ngrx/actions/colors.actions';
import Color from '../../models/domain/color.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectFilteredColors } from '../../ngrx/selectors/filters.selector';
import { FilterActions } from '../../ngrx/actions/filters.actions';
import { ColorStatus } from '../../models/enums/color-status.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  colors$!: Observable<Color[] | undefined>;
  count$!: Observable<number>;

  colorsList$!: Observable<Color[]>;

  // This life-cycle hook is executed when the component is created.
  constructor(
    private readonly __colorsActions: ColorsActions,
    private readonly __filtersActions: FilterActions,
    private __store: Store
  ) {
    // Select all colors registered at the store.
    // this.count$ = this.__store.select(selectColorCount);
    // this.__store.dispatch(this.__filtersActions.setFilterValue(ColorStatus.DEFAULT)); // 1.First we need to [dispatch]
    this.colors$ = this.__store.select(selectFilteredColors); // We need to select the filter colors
  }

  ngOnInit() {
    console.log('component initialized!');
    console.log('all colors all get', this.colors$);
    // Here we need to (subsribe) to watch or listen the updates at reducer when any chages
    // happens ant reducer.

    //this.__store.dispatch(this.__colorsActions.getAllColors()); // Then we need to dipatch the action to get all videso from store
    //this.colors$ = this.__store.select(selectFilteredColors); // we need to subscribe to (store) to listen changes at reducers' sate
  }

  handleSearchTask(s: string): void {
    this.__store.dispatch(this.__filtersActions.setSearchTerm(s));
  }
}
