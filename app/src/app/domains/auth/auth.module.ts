import { NgModule } from '@angular/core';
import { LoginComponent } from './presentation/login-form/login.component';
import { SignupComponent } from './presentation/sign-form/signup.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { GuardAuthLocalDataService} from './services/local-storage/guard-auth-local-data.service';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LogoComponent } from '../../shared/components/logo/logo.component';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AppRoutingModule } from '../../app-routing.module';
@NgModule({
  declarations: [
    // Declare al components, pipes, directives, etc that will be used in this module
    LoginComponent,
    SignupComponent,
    LoginPageComponent,
    SignUpPageComponent,
    // Declare all Pipes

    // Declare all Directives

    // Declare all Services

    // Declare other thing holded by this module
  ],
  imports: [
    // Import core and another modules that will be used in this module
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    // Export all components that will be used in other modules
    // when this module is imported through the imports array
    LoginComponent,
    SignupComponent,
    LoginPageComponent,
    SignUpPageComponent,
    // Export all Pipes

    // Export all Directives

    // Export all Services

    // Export all Modules

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Export all Interfaces

    // Import RoutingModules
    AuthRoutingModule,
    // Export another things here
  ],
  providers: [GuardAuthLocalDataService],
})
export class AuthModule {}
