import { NgModule } from '@angular/core';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MinhaListaComponent } from './components/minha-lista/minha-lista.component';


@NgModule({
  declarations: [InicioComponent, MinhaListaComponent],
  imports: [
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
