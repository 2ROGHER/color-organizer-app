import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: SignUpPageComponent,
    pathMatch: 'full',
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
      preloadingStrategy: PreloadingStrategy,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
