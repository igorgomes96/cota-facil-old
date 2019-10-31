import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/app/shared/models/lista';

@Component({
  selector: 'app-lista-card',
  templateUrl: './lista-card.component.html',
  styleUrls: ['./lista-card.component.scss'],
})
export class ListaCardComponent implements OnInit {

  @Input() lista: Lista;
  constructor() { }

  ngOnInit() {}

}
