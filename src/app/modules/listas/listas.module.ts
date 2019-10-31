import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ListaCardComponent } from './components/lista-card/lista-card.component';
import { ListasComponent } from './pages/listas/listas.component';
import { ListasRoutingModule } from './listas-routing.module';
import { ListaDetalhesComponent } from './pages/lista-detalhes/lista-detalhes.component';


@NgModule({
  declarations: [
    ListasComponent,
    ListaCardComponent,
    ListaDetalhesComponent
  ],
  imports: [
    ListasRoutingModule,
    SharedModule
  ]
})
export class ListasModule { }
