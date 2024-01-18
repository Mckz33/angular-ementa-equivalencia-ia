// instituicao.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instituicao } from '../models/instituicao';

@Injectable({
  providedIn: 'root',
})
export class InstituicaoService {
  private baseUrl = 'http://localhost:3000/instituicoes';

  constructor(private http: HttpClient) {}

  // Obtém todas as instituições.
  getInstituicoes(): Observable<Instituicao[]> {
    return this.http.get<Instituicao[]>(this.baseUrl);
  }

  // Obtém uma instituição pelo ID.
  getInstituicaoById(id: number): Observable<Instituicao> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Instituicao>(url);
  }

  // Adiciona uma nova instituição.
  addInstituicao(instituicao: Instituicao): Observable<Instituicao> {
    return this.http.post<Instituicao>(this.baseUrl, instituicao);
  }

  // Atualiza uma instituição existente.
  updateInstituicao(instituicao: Instituicao): Observable<Instituicao> {
    const url = `${this.baseUrl}/${instituicao.instituicaoId}`;
    return this.http.put<Instituicao>(url, instituicao);
  }

  // Exclui uma instituição pelo ID.
  deleteInstituicao(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
