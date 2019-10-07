import { NgModule } from '@angular/core';

import { OrcamentosRoutingModule } from './orcamentos-routing.module';
import { OrcamentosComponent } from './pages/orcamentos/orcamentos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OrcamentosComponent
  ],
  imports: [
    OrcamentosRoutingModule,
    SharedModule
  ]
})
export class OrcamentosModule { }
