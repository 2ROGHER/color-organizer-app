import { NgModule } from '@angular/core';
import { CounterViewComponent } from './components/counter-view/counter-view.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { FilterComponent } from './components/filter/filter.component';
import { LogoComponent } from './components/logo/logo.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchbarComponent } from './components/search-bar/search-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StarComponent } from './components/star/star.component';
import { TrackNavigationComponent } from './components/track-navigation/track-navigation.component';

import { CommonModule} from '@angular/common';
import { DestructPipe, SizePipe } from './pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // Declare all components that used in other modules
    // This components will be available in other modules thorough imports and this components
    // will be used the logic imported through imports
    CounterViewComponent,
    DropdownMenuComponent,
    FilterComponent,
    LogoComponent,
    PaginationComponent,
    SearchbarComponent,
    SettingsComponent,
    StarComponent,
    TrackNavigationComponent,

    // Declare Pipes
    SizePipe,
    DestructPipe,

    // Declare Directives

    // Declare Services

    // Declare Modules

    // Declare anthers
  ],
  imports: [
    // Import all modules that will be used in components, services, pipes, directives, etc
    // declared in this module and in declarations array `declarations: []`
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    // Exports all components that will be used in another modules
    CounterViewComponent,
    DropdownMenuComponent,
    FilterComponent,
    LogoComponent,
    PaginationComponent,
    SearchbarComponent,
    SettingsComponent,
    StarComponent,
    TrackNavigationComponent,

    // Export all Pipes
    SizePipe,
    DestructPipe,

    // Export all Directives

    // Export all Services

    // Export all Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Export all Interfaces

    // Export another things here
  ],
  providers: [
    // Declare all services or define all services as providers
    SizePipe,
    DestructPipe,
  ],
})
export class SharedModule {}
