import { Component, OnInit, Input } from '@angular/core';
import { Mensagem, PosicaoMensagem } from 'src/app/shared/models/chat';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss'],
})
export class MensagemComponent implements OnInit {

  PosicaoMensagem = PosicaoMensagem;
  @Input() mensagem: Mensagem;
  constructor() { }

  ngOnInit() {}

}
