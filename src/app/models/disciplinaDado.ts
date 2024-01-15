import { Disciplina } from "./disciplina";

export interface disciplinaDado {
    disciplinaDadoId: number;
    ementa: string;
    conteudo: string | null;

    disciplinaId: Disciplina;
}