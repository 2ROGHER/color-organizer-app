import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { Color } from '../../../domains/color/domain/models';
import { selectFilteredColors } from '../../../core/state/selectors';
import { Observable } from 'rxjs';

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
  limit: number = 16; // define the limit
  colors$!: Observable<Color[]>;

  constructor(private readonly __store: Store<AppState>) {
    this.colors$ = this.__store.select(selectFilteredColors);
  }
}
