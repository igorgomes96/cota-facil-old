import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/shared/models/item';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.scss'],
})
export class ListaItemComponent implements OnInit {

  @Input() itens: Item[];
  @Output() adiciona = new EventEmitter<Item>();
  @Output() remove = new EventEmitter<Item>();
  @Output() atualiza = new EventEmitter<Item>();


  constructor() { }

  ngOnInit() {  }

  adicionaItem(item: Item) {
    this.adiciona.emit(item);
  }

  atualizaItem(item: Item) {
    this.atualiza.emit(item);
  }

  removeItem(item: Item) {
    this.remove.emit(item);
  }

}
