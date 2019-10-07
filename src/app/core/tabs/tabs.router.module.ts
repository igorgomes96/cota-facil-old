import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../modules/inicio/inicio.module').then(m => m.InicioModule)
          }
        ]
      },
      {
        path: 'pesquisa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../modules/pesquisa/pesquisa.module').then(m => m.PesquisaModule)
          }
        ]
      },
      {
        path: 'orcamentos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../modules/orcamentos/orcamentos.module').then(m => m.OrcamentosModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../modules/perfil/perfil.module').then(m => m.PerfilModule)
          }
        ]
      },
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/main/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
