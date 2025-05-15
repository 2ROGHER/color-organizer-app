import { NgModule } from "@angular/core";
import { SidebarComponent } from "./side-bar.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SideBarService } from "./side-bar.service";

@NgModule({
  declarations: [
    SidebarComponent,
    // Declare other components here
    // Declare Pipes
    // Declare Directives
    // Declare Services
    // Declare Modules
    // Declare anathers
  ],
  imports: [
    // Import core modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // Import other modules here
    // Import Pipes
    // Import Directives
    // Import Services
    // Import Modules
  ],
  exports: [
    // Export Components
    SidebarComponent,
    // Export core modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // Export Pipes
    // Export Directives
    // Export Modules
    // Export anothers
  ],
  providers: [
    // Declare Services
    SideBarService
  ],
})
export class SideBarModule {}
