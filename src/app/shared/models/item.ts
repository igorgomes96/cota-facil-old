export class Unidade {
    sigla: string;
    nome: string;
}

export class Item {
    id: string;
    nome: string;
    descricao: string;
    unidade: Unidade;
    qtda: number;
    valorMedio: number;
}
