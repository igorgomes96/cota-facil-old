import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversasComponent } from './pages/conversas/conversas.component';
import { ConversaComponent } from './pages/conversa/conversa.component';


const routes: Routes = [
  {
    path: '',
    data: {
      exibeBotaoChat: false
    },
    children: [
      {
        path: '',
        component: ConversasComponent,
        data: {
          header: 'Chat'
        }
      },
      {
        path: ':id',
        component: ConversaComponent,
        data: {
          header: 'Chat'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
