import { NgModule } from '@angular/core';

import { MinhaListaRoutingModule } from './minha-lista-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MinhaListaComponent } from './pages/minha-lista/minha-lista.component';


@NgModule({
  declarations: [
    MinhaListaComponent
  ],
  imports: [
    MinhaListaRoutingModule,
    SharedModule
  ]
})
export class MinhaListaModule { }
