import { NgModule } from '@angular/core';

import { Camera } from '@ionic-native/camera/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';

import { MinhaListaRoutingModule } from './minha-lista-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MinhaListaComponent } from './pages/minha-lista/minha-lista.component';
import { AnexosComponent } from './components/anexos/anexos.component';
import { RevisaoComponent } from './pages/revisao/revisao.component';
import { EnderecoEntregaComponent } from './components/endereco-entrega/endereco-entrega.component';
import { EscolhaCategoriaComponent } from './pages/escolha-categoria/escolha-categoria.component';


@NgModule({
  declarations: [
    MinhaListaComponent,
    AnexosComponent,
    RevisaoComponent,
    EnderecoEntregaComponent,
    EscolhaCategoriaComponent
  ],
  imports: [
    MinhaListaRoutingModule,
    SharedModule
  ],
  providers: [
    Camera,
    PhotoViewer,
    Chooser
  ]
})
export class MinhaListaModule { }
