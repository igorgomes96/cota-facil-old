import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/shared/models/lista';
import { MinhaListaService } from 'src/app/core/services/minha-lista.service';
import { Observable } from 'rxjs';
import { ListasService } from 'src/app/core/services/listas.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  listas$: Observable<Lista[]>;
  constructor(
    private listaService: ListasService
  ) { }

  ngOnInit() {
    this.listas$ = this.listaService.listas;
  }

}
