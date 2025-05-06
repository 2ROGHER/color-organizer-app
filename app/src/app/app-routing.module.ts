import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ColorDetailsComponent } from './pages/color-details/color-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
    // If we want to add [bradcrumbs] is necesary use the router methods incorporated by Angular.
    data: {
      breadcrumbs: 'Home',
    },
  },
  {
    path: 'details',
    component: ColorDetailsComponent,
    pathMatch: 'full',
    data: {
      breadcrumbs: 'Details',
    },
  },

  {
    path: 'register',
    component: SignUpPageComponent,
    pathMatch: 'full',
    data: {
      breadcrumbs: 'Register',
    },
  },
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full',
  },
  // Or you can apply the lazy-loading to load components individualy while the user
  // makes the navigation to each module
  // {
  //   path: 'auth',
  //   loadComponent: () => import("./app.module").then(m => m.AppModule).catch(e => window.Error(e)),
  // },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  // PreloagindStrategy helps us load all modules at the background without block the user
  // This load the modules by [lazy-loaded]
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules // This is the correct way to use (PreloadingStrategy) or we can create a
      // concreta class an (extends) the (PreloadingStratey) interface
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
