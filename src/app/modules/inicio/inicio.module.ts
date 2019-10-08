import { NgModule } from '@angular/core';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MinhaListaCardComponent } from './components/minha-lista-card/minha-lista-card.component';


@NgModule({
  declarations: [InicioComponent, MinhaListaCardComponent],
  imports: [
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
