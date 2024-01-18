// disciplina.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disciplina } from '../models/disciplina';

@Injectable({
  providedIn: 'root',
})
export class DisciplinaService {
  private baseUrl = 'http://localhost:3000/disciplinas';

  constructor(private http: HttpClient) {}

  getDisciplinas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(this.baseUrl);
  }

  getDisciplinaById(id: number): Observable<Disciplina> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Disciplina>(url);
  }

  addDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    return this.http.post<Disciplina>(this.baseUrl, disciplina);
  }

  updateDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    const url = `${this.baseUrl}/${disciplina.disciplinaId}`;
    return this.http.put<Disciplina>(url, disciplina);
  }

  deleteDisciplina(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
