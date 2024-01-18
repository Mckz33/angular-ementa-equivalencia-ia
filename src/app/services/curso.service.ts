// curso.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private baseUrl = 'http://localhost:3000/cursos';
  constructor(private http: HttpClient) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl);
  }

  getCursoById(id: number): Observable<Curso> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Curso>(url);
  }

  addCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.baseUrl, curso);
  }

  updateCurso(curso: Curso): Observable<Curso> {
    const url = `${this.baseUrl}/${curso.cursoId}`;
    return this.http.put<Curso>(url, curso);
  }

  deleteCurso(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
