import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Categoria } from 'src/app/shared/models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categoriaCollection: AngularFirestoreCollection<Categoria>;

  constructor(private db: AngularFirestore) {
    this.categoriaCollection = this.db.collection<Categoria>('categorias', ref => ref.orderBy('nome'));
  }

  categorias(): Observable<Categoria[]> {
    return this.categoriaCollection.valueChanges();
  }

}
