import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Lista } from 'src/app/shared/models/lista';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor(
    private authService: AuthService,
    private db: AngularFirestore
  ) { }

  get listas(): Observable<Lista[]> {
    return this.authService.getUser()
      .pipe(
        switchMap(usuario => this.db.doc(`usuarios/${usuario.uid}`)
          .collection<Lista>('listas').valueChanges()
          .pipe(map(listas => {
            listas.forEach(lista => lista.horarioEnvio = (lista.horarioEnvio as any).toDate());
            return listas;
          })))
      );
  }

  lista(id: string): Observable<Lista> {
    return this.authService.getUser()
      .pipe(switchMap(usuario => this.db.doc<Lista>(`usuarios/${usuario.uid}/listas/${id}`).valueChanges()));
  }

}
