import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { disciplinaDados } from '../models/disciplinaDados';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaDadosService {
  private apiUrl = 'http://localhost:8080/api/disciplina-dados';

  constructor(private http: HttpClient) { }
  obterDisciplinasDados(): Observable<disciplinaDados[]> {
    return this.http.get<disciplinaDados[]>(this.apiUrl);
  }

  obterDisciplinasDadosId(id: string): Observable<disciplinaDados> {
    return this.http.get<disciplinaDados>(this.apiUrl + '/' + id);
  }

  adicionarDisciplinasDados(disciplinaDados: disciplinaDados): Observable<disciplinaDados> {
    return this.http.post<disciplinaDados>(this.apiUrl, disciplinaDados);
  }

  atualizarDisciplinasDados(disciplinaDados: disciplinaDados): Observable<disciplinaDados> {
    return this.http.put<disciplinaDados>(`${this.apiUrl}/${disciplinaDados.DisciplinaDadosId}`, disciplinaDados);
  }
  
  deletarDisciplinasDados(id: number): Observable<disciplinaDados> {
    return this.http.delete<disciplinaDados>(this.apiUrl + '/' + id);
  }

}
