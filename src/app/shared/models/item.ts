export class Unidade {
    sigla: string;
    nome: string;
}

export class Item {
    id: number;
    nome: string;
    descricao: string;
    unidade: Unidade;
    qtda: number;
    valorMedio: number;
}
