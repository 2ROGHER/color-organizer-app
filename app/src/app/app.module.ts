import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ColorComponent } from './components/color/color.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CreateColorFormComponent } from './forms/create-color-form/create-color-form.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { FilterComponent } from './components/filter/filter.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchbarComponent } from './components/search-bar/search-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StarComponent } from './components/star/star.component';
import { CheckBoxComponent } from './components/utils/check-box/check-box.component';
import { NgrxModule } from './ngrx/ngrx.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './forms/signup/signup.component';
import { LoginComponent } from './forms/login/login.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    // 1. Here we need to declare all components to start used
    HomePageComponent,
    LoginComponent,
    SignUpPageComponent,

    LoginPageComponent,
    ColorComponent,
    ColorListComponent,
    CreateColorFormComponent,
    DropdownMenuComponent,
    FilterComponent,
    LogoComponent,

    SearchbarComponent,
    SettingsComponent,
    StarComponent,
    CheckBoxComponent,
    SignupComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    // 3. Import all modules to use here
    NgrxModule,
  ],
  providers: [
    // 2. We need to declare all services here to use
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
