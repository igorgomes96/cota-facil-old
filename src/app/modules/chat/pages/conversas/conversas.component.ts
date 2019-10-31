import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/shared/models/chat';
import { Observable, from } from 'rxjs';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.component.html',
  styleUrls: ['./conversas.component.scss'],
})
export class ConversasComponent implements OnInit {

  conversas$: Observable<Chat[]>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.conversas$ = from(this.chatService.carregaChats());
  }

}
