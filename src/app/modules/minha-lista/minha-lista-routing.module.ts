import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinhaListaComponent } from './pages/minha-lista/minha-lista.component';
import { RevisaoComponent } from './pages/revisao/revisao.component';
import { EscolhaCategoriaComponent } from './pages/escolha-categoria/escolha-categoria.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MinhaListaComponent,
        data: {
          header: 'Minha Lista'
        }
      },
      {
        path: 'categoria',
        component: EscolhaCategoriaComponent,
        data: {
          header: 'Categoria'
        }
      },
      {
        path: 'revisao',
        component: RevisaoComponent,
        data: {
          header: 'Revisão'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhaListaRoutingModule { }
