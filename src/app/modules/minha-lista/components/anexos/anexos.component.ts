import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Anexo } from 'src/app/shared/models/lista';

@Component({
  selector: 'app-anexos',
  templateUrl: './anexos.component.html',
  styleUrls: ['./anexos.component.scss'],
})
export class AnexosComponent implements OnInit {

  @Input() anexos: Anexo[] = [];
  @Output() abrirAnexo = new EventEmitter<Anexo>();

  constructor() { }

  ngOnInit() {}

  onAbrirAnexo(imagem: Anexo) {
    this.abrirAnexo.emit(imagem);
  }

}
