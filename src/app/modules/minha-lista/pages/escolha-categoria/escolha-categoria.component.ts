import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/shared/models/categoria';
import { Router } from '@angular/router';
import { MinhaListaService } from 'src/app/core/services/minha-lista.service';
import { CategoriasService } from 'src/app/core/services/categorias.service';

@Component({
  selector: 'app-escolha-categoria',
  templateUrl: './escolha-categoria.component.html',
  styleUrls: ['./escolha-categoria.component.scss'],
})
export class EscolhaCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];
  textoPesquisa = '';

  constructor(
    private categoriasService: CategoriasService,
    private listaService: MinhaListaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoriasService.categorias()
      .subscribe((categorias: Categoria[]) => this.categorias = categorias);
  }

  pesquisar(texto: string) {
    this.textoPesquisa = texto;
  }

  get categoriasFiltradas() {
    return this.categorias
      .filter(c => c.nome.toLowerCase().includes(this.textoPesquisa.toLowerCase()));
  }

  async criarLista(categoria: Categoria) {
    await this.listaService.criaLista(categoria);
    this.router.navigate(['/minha-lista']);
  }

}
