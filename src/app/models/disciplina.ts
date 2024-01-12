import { Curso } from "./curso";
import { Instituicao } from "./instituicao";

export interface Disciplina {
    disciplinaId: number;
    disciplinaNome: string;
    curso: Curso;
    instituicao: Instituicao;
}