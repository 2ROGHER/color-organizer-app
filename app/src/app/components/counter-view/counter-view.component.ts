import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/interfaces';
import Color from '../../models/domain/color.model';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrl: './counter-view.component.scss',
})

/**
 * This class is responsible to manage the count of colors and show the user how many colors are viewing in real time
 * @example
 * ```typescript
 * this._store.select((state) => state.colors)?.subscribe((colors) => {
 *   // Handle the colors state here
 *   this.limit = colors.colors.length;
 *   this.length = colors.colors.length;
 * });
 * ```
 */
export class CounterViewComponent {
  length: number = 0; // define the length of the elements
  limit: number = 15; // define the limit
  constructor(private readonly _store: Store<AppState>) {
    this._store
      .select((state) => state.colors)
      ?.subscribe((res) => {
        let colors = res;
        console.log(res);
      });
  }
}
