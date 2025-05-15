import { NgModule } from '@angular/core';
import { BreadcrumbService } from './services/bread-crumbs/bread-crumbs.service';
import { DragDropService } from './services/drag-drop/drag-drop.service';
import { PaginationService } from './services/pagination/pagination.service';
import { NgrxModule } from './state/state.module';

@NgModule({
  declarations: [
    // Declare Components
    // Declare Pipes
    // Declare Directives
    // Declare Modules

  ],
  imports: [
    // 1. In this module we will import the NgRxModule
    NgrxModule,
    // Export Components
    // Export Pipes
    // Export Directives
    // Export Modules
  ],
  exports: [NgrxModule],
  providers: [BreadcrumbService, DragDropService, PaginationService],
})
export class CoreModule {}
