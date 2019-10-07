import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrcamentosComponent } from './pages/orcamentos/orcamentos.component';


const routes: Routes = [
  {
    path: '',
    component: OrcamentosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentosRoutingModule { }
