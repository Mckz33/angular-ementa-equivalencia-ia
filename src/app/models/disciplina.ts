import { Curso } from "./curso";
import { Instituicao } from "./instituicao";

export interface Disciplina {
    DisciplinaId: number;
    DisciplinaNome: string;
    curso: Curso;
    instituicao: Instituicao;
}