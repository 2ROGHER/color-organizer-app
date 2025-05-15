import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from './store';
import { ColorActions, ColorsActions, SignUpAction } from './actions/index';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FilterActions } from './actions/filters.actions';

/**
 * This module is created to manage the complete NgRx-Redux state of the application
 * @example
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(rootReducer),
    // Now here we need to add and connect out Store
    StoreModule.forFeature('state', rootReducer),
    EffectsModule.forRoot([
      // This contains an Effects arrasy
    ]),
    // We set the @ngrx/store-devtools to use it at production
    StoreDevtoolsModule.instrument({ maxAge: 60, logOnly: true, trace: true }),
  ],
  exports: [],
  providers: [
    // 1. Declare all providers to use
    ColorsActions,
    ColorActions,
    SignUpAction, //
    FilterActions,
  ],
})
export class NgrxModule {
  constructor() {}
}
