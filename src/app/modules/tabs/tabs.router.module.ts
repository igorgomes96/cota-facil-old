import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
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
        path: 'listas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../listas/listas.module').then(m => m.ListasModule)
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
