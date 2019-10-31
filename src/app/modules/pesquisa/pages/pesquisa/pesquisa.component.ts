import { Component, OnInit } from '@angular/core';

import { Categoria } from 'src/app/shared/models/categoria';
import { Item } from 'src/app/shared/models/item';
import { MinhaListaService } from 'src/app/core/services/minha-lista.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent implements OnInit {

  categorias: Categoria[] = [];
  itens: Item[] = [];

  constructor(
    private listaService: MinhaListaService) { }

  ngOnInit() {
    // this.categoriasApi.getAll()
    //   .subscribe((categorias: Categoria[]) => this.categorias = categorias);

    // this.itensApi.getAll()
    //   .subscribe((itens: Item[]) => {
    //     this.itens = itens;
    //   });
  }

  pesquisar(texto: string) {
    // this.itensApi.getAll({ pesquisa: texto })
    //   .subscribe((itens: Item[]) => this.itens = itens);
  }

  adicionaItem(item: Item) {
    this.listaService.adicionaItem(item);
  }

  removeItem(item: Item) {
    this.listaService.removeItem(item.id);
  }

  atualizaItem(item: Item) {
    this.listaService.atualizaItem(item.id, item);
  }

}
