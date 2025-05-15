import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';


import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// 🏛️ Any component thas is holded in the app component is considered a (child) component
// and this is render first along with the app component
// Note ⚠️⚠️: Modules imported in imports array only will be used by the components in declarated or included
// at declarations array.

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    // Important: Don't forget to import the [BrowserModule, CommonModule] to works successfully
    // 1. Core modules
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    // Import the RouterModule to works with [Routing]
    RouterModule,
    HttpClientModule,

    // Import [core module]
    CoreModule,
    // Import the [SharedModule]
    // SharedModule,

  ],
  exports: [
    // Define all components, providers, pipes, directives that you want to export
    // and use them in other modules
  ],
  providers: [
    // Define providers here
  ],
  bootstrap: [AppComponent], // the component that will be loaded first in the application
})
export class AppModule {}
