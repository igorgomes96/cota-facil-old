import { NgModule } from '@angular/core';

import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaItemComponent } from './components/lista-item/lista-item.component';
import { InfoItemComponent } from './components/info-item/info-item.component';


@NgModule({
  declarations: [
    PesquisaComponent,
    ListaItemComponent,
    InfoItemComponent
  ],
  imports: [
    PesquisaRoutingModule,
    SharedModule
  ]
})
export class PesquisaModule { }
