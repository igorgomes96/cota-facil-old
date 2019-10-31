import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthCanLoadGuard } from './core/guards/auth.canload.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./modules/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthCanLoadGuard]
  },
  {
    path: 'minha-lista',
    loadChildren: () => import('./modules/minha-lista/minha-lista.module').then(m => m.MinhaListaModule),
    canLoad: [AuthCanLoadGuard]
  },
  {
    path: 'listas',
    loadChildren: () => import('./modules/listas/listas.module').then(m => m.ListasModule),
    canLoad: [AuthCanLoadGuard]
  },
  {
    path: 'chat',
    loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule),
    canLoad: [AuthCanLoadGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    redirectTo: '/main/inicio',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
