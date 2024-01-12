import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  private apiUrl = 'http://localhost:8080/api/disciplina';


  constructor(private http: HttpClient) { }
  obterDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.apiUrl);
  }

  obterDisciplina(id: number): Observable<Disciplina> {
    return this.http.get<Disciplina>(this.apiUrl + '/' + id);
  }

  adicionarDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.apiUrl, disciplina);
  }

  atualizarDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.put<Disciplina>(`${this.apiUrl}/${disciplina.disciplinaId}`, disciplina);
  }

  deletarDisciplina(id: number): Observable<Disciplina> {
    return this.http.delete<Disciplina>(this.apiUrl + '/' + id);
  }
}
