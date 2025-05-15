import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ColorModule } from '../color/color.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard.component';
import { NotFoundPageComponent } from './pages/not-found-page/404.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideBarModule } from '../../layout/commons/side-bar/side-bar.module';

@NgModule({
  declarations: [
    // Declare all components that will be used in this module
    // Declare all components
    DashboardPageComponent,
    NotFoundPageComponent
    // Declare all Pipes

    // Declare all Directives

    // Declare all Services

    // Declare all Modules

    // Declare anothers
  ],
  imports: [
    // Import all core modules that is needed to use by the components declared at `declarations: []` array
    SharedModule,
    ColorModule,
    SideBarModule,

    // Import all Pipes,
    // Import all Directives,
    // Import all Services
    // Import all Modules
    // Import RoutingModules
    DashboardRoutingModule
    // Import anothers
  ],
  exports: [
    // Export all components that will be used in other modules when this modules is imported
    // Export all Pipes
    // Export all Directives
    // Export all Services
    // Export all Modules
    // Export anothers
  ],
  providers: [
    // Define all providers or services that will be used in this module
  ],
})
export class DashboardModule {}
