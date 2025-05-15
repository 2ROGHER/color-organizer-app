import { NgModule } from '@angular/core';
import { ColorComponent } from './presentation/color/color.component';
import { ColorListComponent } from './presentation/color-list/color-list.component';
import { CreateColorFormComponent } from './presentation/create-color/create-color-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 *
 */
@NgModule({
  declarations: [ColorComponent, ColorListComponent, CreateColorFormComponent],
  imports: [
    // Import all modules that this module needs and that will be used in this module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Import another modules that will be used in this module and used by the components declared at ceclarations array
  ],
  exports: [
    // Export all components that will be used in other modules
    ColorComponent,
    ColorListComponent,
    CreateColorFormComponent,

    // Export all Pipes

    // Export all Directives

    // Export all Services

    // Export all Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // Export anothers
  ],
  providers: [],
})
export class ColorModule {}
