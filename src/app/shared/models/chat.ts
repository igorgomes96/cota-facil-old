import { Usuario } from './usuario';

export enum PosicaoMensagem {
    Direita,
    Esquerda
}

export class Chat {
    id: string;
    ultimaMensagem: string;
    thumbnail: string;
    mensagens: Mensagem[];
    horarioUltimaMensagem: Date;
    participantes: Usuario[];

    nomeContato: string;
}

export class Mensagem {
    texto: string;
    horario: Date;
    lida: boolean;
    remetenteId: string;
    posicaoMensagem: PosicaoMensagem;
}
