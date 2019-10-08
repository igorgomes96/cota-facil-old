import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    data: {
      exibeBotaoMinhaLista: true
    },
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../inicio/inicio.module').then(m => m.InicioModule)
          }
        ]
      },
      {
        path: 'pesquisa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pesquisa/pesquisa.module').then(m => m.PesquisaModule)
          }
        ]
      },
      {
        path: 'orcamentos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../orcamentos/orcamentos.module').then(m => m.OrcamentosModule)
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/main/inicio',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
