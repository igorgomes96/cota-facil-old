import { NgModule } from '@angular/core';

import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PesquisaComponent,
  ],
  imports: [
    PesquisaRoutingModule,
    SharedModule
  ]
})
export class PesquisaModule { }
