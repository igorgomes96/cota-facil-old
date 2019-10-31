import { Component, OnInit, Input } from '@angular/core';
import { Chat } from 'src/app/shared/models/chat';

@Component({
  selector: 'app-conversa-item',
  templateUrl: './conversa-item.component.html',
  styleUrls: ['./conversa-item.component.scss'],
})
export class ConversaItemComponent implements OnInit {

  @Input() chat: Chat;

  constructor() { }

  ngOnInit() { }

}
