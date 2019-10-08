import { Component, OnInit } from '@angular/core';

import { Categoria } from 'src/app/shared/models/categoria';
import { CategoriasApiService } from 'src/app/core/api/categorias-api.service';
import { ItensApiService } from 'src/app/core/api/itens-api.service';
import { Item } from 'src/app/shared/models/item';
import { ListaService } from 'src/app/core/services/lista.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent implements OnInit {

  categorias: Categoria[] = [];
  itens: Item[] = [];

  constructor(
    private categoriasApi: CategoriasApiService,
    private itensApi: ItensApiService,
    private listaService: ListaService) { }

  ngOnInit() {
    this.categoriasApi.getAll()
      .subscribe((categorias: Categoria[]) => this.categorias = categorias);

    this.itensApi.getAll()
      .subscribe((itens: Item[]) => {
        this.itens = itens;
      });
  }

  pesquisar(texto: string) {
    this.itensApi.getAll({ pesquisa: texto })
      .subscribe((itens: Item[]) => this.itens = itens);
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
