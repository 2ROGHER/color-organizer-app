import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./domains/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'auth',
    // component: () => import('./domains/auth/pages/login-page/login-page.component').then(m => m.LoginPageComponent),
    loadChildren: () =>
      import('./domains/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./domains/auth/auth.module').then(m => m.AuthModule),
  // },
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
      preloadingStrategy: PreloadAllModules, // This is the correct way to use (PreloadingStrategy) or we can create a
      // concreta class an (extends) the (PreloadingStratey) interface
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
