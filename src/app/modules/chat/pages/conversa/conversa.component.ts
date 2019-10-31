import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Chat, Mensagem, PosicaoMensagem } from 'src/app/shared/models/chat';
import { IonContent } from '@ionic/angular';
import { ChatService } from 'src/app/core/services/chat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/models/usuario';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.scss'],
})
export class ConversaComponent implements OnInit {

  PosicaoMensagem = PosicaoMensagem;

  @ViewChild('content', { static: false })
  private content: IonContent;
  chat: Chat;
  usuario: Usuario;

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  async ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => this.chatService.chat(params.id))
      ).subscribe(chat => {
        this.chat = chat;
        setTimeout(() => {
          this.content.scrollToBottom();
        }, 200);
      });
    this.usuario = await this.authService.getUser().toPromise();
  }

  enviaTexto(texto: string) {
    this.chatService.enviaMensagem(this.chat.id, texto);
  }

  enviaImagem(imagem: any) {

  }

}
