import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Lista } from 'src/app/shared/models/lista';
import { Item } from 'src/app/shared/models/item';
import { ListaApiService } from '../api/lista-api.service';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private listaEmitter = new BehaviorSubject<Lista>(null);

  constructor(private listaApi: ListaApiService) {
    this.listaApi.getLista().subscribe(lista => {
      if (!lista || !lista.itens || !lista.itens.length) {
        this.listaEmitter.next(null);
      } else {
        this.listaEmitter.next(lista);
      }
    });
  }

  listaAtualizada(): Observable<Lista> {
    return this.listaEmitter;
  }

  adicionaItem(item: Item) {
    this.listaApi.postAdicionaItem(item)
      .subscribe(lista => this.listaEmitter.next(lista));
  }

  atualizaItem(itemId: number, item: Item) {
    this.listaApi.putAtualizaItem(itemId, item)
      .subscribe(lista => this.listaEmitter.next(lista));
  }

  removeItem(itemId: number) {
    this.listaApi.deleteRemoveItem(itemId)
      .subscribe(lista => {
        if (!lista.itens.length) {
          this.deleteLista();
        } else {
          this.listaEmitter.next(lista);
        }
      });
  }

  deleteLista() {
    this.listaApi.deleteLista()
      .subscribe(_ => this.listaEmitter.next(null));
  }
}
