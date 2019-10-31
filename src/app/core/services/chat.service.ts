import { Observable, forkJoin, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensagem, Chat, PosicaoMensagem } from 'src/app/shared/models/chat';
import { map, first, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { firestore } from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private chatCollection: AngularFirestoreCollection<Chat>;

    constructor(
        private db: AngularFirestore,
        private authService: AuthService) {
        this.chatCollection = this.db.collection('chat', ref => ref.orderBy('horarioUltimaMensagem'));
    }

    async carregaChats(): Promise<Chat[]> {
        const { uid } = await this.authService.getUser().toPromise();
        return this.chatCollection.valueChanges().pipe(
            first(),
            map(chats => {
                chats.forEach(chat => {
                    // chat.participantes = [{
                    //     uid: 'sdpWUFHVxac6fyAcZlJXB8tZIkl2',
                    //     email: 'igorago7@gmail.com',
                    //     fotoUrl: '',
                    //     nome: 'Igor'
                    // }, {
                    //     uid: 'sdpWUFHVxac6fyAcZlJXB8tZIkl3',
                    //     email: 'igorago8@gmail.com',
                    //     fotoUrl: '',
                    //     nome: 'José'
                    // }];
                    chat.nomeContato = chat.participantes.filter(c => uid !== c.uid)[0].nome;
                });
                return chats;
            })
        ).toPromise();
    }

    chat(id: string): Observable<Chat> {
        return this.chatCollection
            .doc(id)
            .snapshotChanges()
            .pipe(
                switchMap(doc => {
                    return forkJoin([of(doc), this.authService.getUser()]);
                }),
                map(data => {
                    const doc = data[0];
                    const { uid } = data[1];
                    const chat = { id: doc.payload.id, ...doc.payload.data() } as Chat;
                    chat.mensagens.forEach(mensagem => {
                        mensagem.horario = new Date((mensagem.horario as any).seconds * 1000);
                        mensagem.posicaoMensagem = mensagem.remetenteId === uid ? PosicaoMensagem.Direita : PosicaoMensagem.Esquerda;
                    });
                    return chat;
                }),
            );
    }

    async enviaMensagem(chatId: string, mensagem: string) {
        const { uid } = await this.authService.getUser().toPromise();
        const data: any = {
            horario: new Date(),
            lida: false,
            remetenteId: uid,
            texto: mensagem
        };
        const ref = this.chatCollection.doc(chatId);
        return ref.update({
            mensagens: firestore.FieldValue.arrayUnion(data)
        });
    }
}
