import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/shared/models/lista';
import { ListaService } from 'src/app/core/services/lista.service';

@Component({
  selector: 'app-minha-lista-card',
  templateUrl: './minha-lista-card.component.html',
  styleUrls: ['./minha-lista-card.component.scss'],
})
export class MinhaListaCardComponent implements OnInit {

  lista: Lista;
  constructor(private listaService: ListaService) { }

  ngOnInit() {
    this.listaService.listaAtualizada()
      .subscribe(lista => this.lista = lista);
  }

}
