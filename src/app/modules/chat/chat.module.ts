import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConversasComponent } from './pages/conversas/conversas.component';
import { ConversaItemComponent } from './components/conversa-item/conversa-item.component';
import { ConversaComponent } from './pages/conversa/conversa.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';


@NgModule({
  declarations: [
    ConversasComponent,
    ConversaItemComponent,
    ConversaComponent,
    MensagemComponent
  ],
  imports: [
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
