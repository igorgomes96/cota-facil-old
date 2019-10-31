import { Component, OnInit } from '@angular/core';
import { MinhaListaService } from 'src/app/core/services/minha-lista.service';
import { Lista } from 'src/app/shared/models/lista';
import { Item } from 'src/app/shared/models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revisao',
  templateUrl: './revisao.component.html',
  styleUrls: ['./revisao.component.scss'],
})
export class RevisaoComponent implements OnInit {

  lista: Lista;
  qtdaItens: number;
  constructor(
    private listaService: MinhaListaService,
    private router: Router) { }

  ngOnInit() {
    this.listaService.minhaLista().subscribe(lista => this.lista = lista);
    this.listaService.totalItens.subscribe(total => this.qtdaItens = total);
  }

  removeItem(item: Item) {
    this.listaService.removeItem(item.id);
  }

  async enviarLista() {
    await this.listaService.enviarLista();
    this.router.navigate(['/main/listas']);
  }

}
