import { NgModule } from '@angular/core';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    PerfilRoutingModule,
    SharedModule
  ]
})
export class PerfilModule { }
