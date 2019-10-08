import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinhaListaComponent } from './pages/minha-lista/minha-lista.component';


const routes: Routes = [
  {
    path: '',
    component: MinhaListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinhaListaRoutingModule { }
