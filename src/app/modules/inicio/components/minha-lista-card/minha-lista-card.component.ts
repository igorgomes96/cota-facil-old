import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/shared/models/lista';
import { MinhaListaService } from 'src/app/core/services/minha-lista.service';


@Component({
  selector: 'app-minha-lista-card',
  templateUrl: './minha-lista-card.component.html',
  styleUrls: ['./minha-lista-card.component.scss'],
})
export class MinhaListaCardComponent implements OnInit {

  lista: Lista;
  currentImage: any;

  constructor(private listaService: MinhaListaService) { }

  ngOnInit() {
    this.listaService.minhaLista()
      .subscribe(lista => this.lista = lista);
  }

}
