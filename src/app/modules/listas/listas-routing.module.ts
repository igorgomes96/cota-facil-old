import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListasComponent } from './pages/listas/listas.component';
import { ListaDetalhesComponent } from './pages/lista-detalhes/lista-detalhes.component';


const routes: Routes = [
  {
    path: '',
    component: ListasComponent,
    data: {
      header: 'Listas'
    }
  },
  {
    path: ':id',
    component: ListaDetalhesComponent,
    data: {
      header: 'Orçamentos Recebidos',
      exibeBotaoChat: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListasRoutingModule { }
