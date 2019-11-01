import { Component, OnInit, Input } from '@angular/core';
import { Lista } from 'src/app/shared/models/lista';
import { ActivatedRoute } from '@angular/router';
import { ListasService } from 'src/app/core/services/listas.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-detalhes',
  templateUrl: './lista-detalhes.component.html',
  styleUrls: ['./lista-detalhes.component.scss'],
})
export class ListaDetalhesComponent implements OnInit {

  lista: Lista;
  constructor(
    private route: ActivatedRoute,
    private listasService: ListasService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(params => this.listasService.lista(params.id))
      ).subscribe(lista => this.lista = lista);
  }

}
