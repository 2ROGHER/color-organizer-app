import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { FilterActions} from '../../../core/state/actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchbarComponent {
  // 1. Define the [term] to search at search
  term: FormControl = new FormControl();
  items: [] = [];

  constructor(private __store: Store, private __filterActions: FilterActions) {}

  ngOnInit(): void {
    this.term = new FormControl();
    // this.term.valueChanges.subscribe((v) =>
    //   this.__store.dispatch(this.__filterActions.setSearchTerm(v))
    // );

    this.term.valueChanges.subscribe((v) => {
      this.__store.dispatch(this.__filterActions.setSearchTerm(v));
    });
  }
}
