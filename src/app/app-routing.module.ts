import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'module1',
    loadChildren: () => import('./pages/module1/module1.module').then( m => m.Module1PageModule)
  },
  {
    path: 'module2',
    loadChildren: () => import('./pages/module2/module2.module').then( m => m.Module2PageModule)
  },
  {
    path: 'module3',
    loadChildren: () => import('./pages/module3/module3.module').then( m => m.Module3PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
