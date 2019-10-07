import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/shared/models/categoria';
import { CategoriasApiService } from 'src/app/core/api/categorias-api.service';
import { tap, map } from 'rxjs/operators';
import { ItensApiService } from 'src/app/core/api/itens-api.service';
import { Item } from 'src/app/shared/models/item';

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
    private itensApi: ItensApiService) { }

  ngOnInit() {
    this.categoriasApi.getAll()
      .subscribe((categorias: Categoria[]) => this.categorias = categorias);

    this.itensApi.getAll()
      .pipe(map((itens: Item[]) => {
        itens.filter(i => !i.qtda && i.qtda !== 0).forEach(i => i.qtda = 0);
        return itens;
      }))
      .subscribe((itens: Item[]) => this.itens = itens);
  }

}
