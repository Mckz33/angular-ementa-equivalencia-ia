import { disciplinaDado } from "./disciplinaDado";

export interface Disciplina {
    disciplinaId: number;
    disciplinaNome: string;

    disciplinaDadoId: disciplinaDado;
}