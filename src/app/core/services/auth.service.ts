import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first, tap } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/models/usuario';
import { Lista } from 'src/app/shared/models/lista';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<Usuario>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<Usuario>(`usuarios/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }


  getUser(): Observable<Usuario> {
    return this.user$.pipe(first());
  }

  googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  gitHubSignIn() {
    const provider = new auth.GithubAuthProvider();
    return this.oAuthLogin(provider);
  }

  private async oAuthLogin(provider: any) {
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private async updateUserData({ uid, email, displayName, photoURL }) {
    const userRef: AngularFirestoreDocument<Usuario> = this.afs.doc(`usuarios/${uid}`);

    const lista = {
      anexos: [],
      horarioEnvio: new Date(),
      itens: [],
      qtdaOrcamentos: 0
    };

    const usuario: Usuario = {
      uid,
      email,
      nome: displayName,
      fotoUrl: photoURL,
      minhaLista: lista as Lista
    };

    return userRef.set(usuario, { merge: true });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/auth']);
  }
}
