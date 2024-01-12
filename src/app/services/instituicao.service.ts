import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instituicao } from '../models/instituicao';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {
  private apiUrl = 'http://localhost:8080/api/instituicao';

  constructor(private http: HttpClient) { }

  obterInstituicoes(): Observable<Instituicao[]> {
    return this.http.get<Instituicao[]>(this.apiUrl);
  }

  obterInstituicaoId(id: number): Observable<Instituicao> {
    return this.http.get<Instituicao>(this.apiUrl + '/' + id);
  }

  adicionarInstituicao(instituicao: Instituicao): Observable<Instituicao> {
    return this.http.post<Instituicao>(this.apiUrl, instituicao);
  }

  atualizarInstituicao(instituicao: Instituicao): Observable<Instituicao> {
    return this.http.put<Instituicao>(`${this.apiUrl}/${instituicao.instituicaoId}`, instituicao);
  }

  deletarInstituicao(id: number): Observable<Instituicao> {
    return this.http.delete<Instituicao>(this.apiUrl + '/' + id);
  }
}
