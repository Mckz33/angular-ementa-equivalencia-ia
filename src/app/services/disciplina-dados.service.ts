// disciplina-dado.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { disciplinaDado } from '../models/disciplinaDado';


@Injectable({
  providedIn: 'root',
})
export class DisciplinaDadoService {
  private baseUrl = 'http://localhost:3000/disciplinaDados';

  constructor(private http: HttpClient) {}

  getDisciplinaDados(): Observable<disciplinaDado[]> {
    return this.http.get<disciplinaDado[]>(this.baseUrl);
  }

  getDisciplinaDadoById(id: number): Observable<disciplinaDado> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<disciplinaDado>(url);
  }

  addDisciplinaDado(disciplinaDado: disciplinaDado): Observable<disciplinaDado> {
    return this.http.post<disciplinaDado>(this.baseUrl, disciplinaDado);
  }

  updateDisciplinaDado(disciplinaDado: disciplinaDado): Observable<disciplinaDado> {
    const url = `${this.baseUrl}/${disciplinaDado.disciplinaDadoId}`;
    return this.http.put<disciplinaDado>(url, disciplinaDado);
  }

  deleteDisciplinaDado(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
