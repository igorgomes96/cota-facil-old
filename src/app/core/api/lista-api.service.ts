import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { endpoints } from 'src/environments/endpoints';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/item';
import { switchMap } from 'rxjs/operators';
import { Lista } from 'src/app/shared/models/lista';

@Injectable({
    providedIn: 'root'
})
export class ListaApiService {

    url = '';
    constructor(private http: HttpClient) {
        this.url = environment.apiUrl + endpoints.lista;
    }

    getLista(): Observable<Lista> {
        return this.http.get<Lista>(this.url);
    }

    postAdicionaItem(item: Item): Observable<Lista> {
        return this.getLista()
            .pipe(   // Passar essa lógica para o back-end
                switchMap(lista => {
                    lista.itens.push(item);
                    return this.http.put<Lista>(`${this.url}`, lista);
                })
            );
    }

    putAtualizaItem(itemId: number, item: Item): Observable<Lista> {
        return this.getLista()
            .pipe(   // Passar essa lógica para o back-end
                switchMap(lista => {
                    const index = lista.itens.findIndex(i => i.id === itemId);
                    lista.itens.splice(index, 1);
                    lista.itens.push(item);
                    return this.http.put<Lista>(`${this.url}`, lista);
                })
            );
    }

    deleteRemoveItem(itemId: number) {
        return this.getLista()
            .pipe(   // Passar essa lógica para o back-end
                switchMap(lista => {
                    const index = lista.itens.findIndex(i => i.id === itemId);
                    lista.itens.splice(index, 1);
                    return this.http.put<Lista>(`${this.url}`, lista);
                })
            );
    }

    deleteLista() {
        return this.getLista()
            .pipe(   // Passar essa lógica para o back-end
                switchMap(lista => {
                    lista.itens = [];
                    return this.http.put<Lista>(`${this.url}`, lista);
                })
            );
    }
}
