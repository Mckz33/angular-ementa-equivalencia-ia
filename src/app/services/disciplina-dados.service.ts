import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { disciplinaDado } from '../models/disciplinaDado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaDadosService {
  private apiUrl = 'http://localhost:8080/api/disciplina-dados';

  constructor(private http: HttpClient) { }
  obterDisciplinasDados(): Observable<disciplinaDado[]> {
    return this.http.get<disciplinaDado[]>(this.apiUrl);
  }

  obterDisciplinasDadosId(id: string): Observable<disciplinaDado> {
    return this.http.get<disciplinaDado>(this.apiUrl + '/' + id);
  }

  adicionarDisciplinasDados(disciplinaDados: disciplinaDado): Observable<disciplinaDado> {
    return this.http.post<disciplinaDado>(this.apiUrl, disciplinaDados);
  }

  atualizarDisciplinasDados(disciplinaDados: disciplinaDado): Observable<disciplinaDado> {
    return this.http.put<disciplinaDado>(`${this.apiUrl}/${disciplinaDados.disciplinaDadoId}`, disciplinaDados);
  }
  
  deletarDisciplinasDados(id: number): Observable<disciplinaDado> {
    return this.http.delete<disciplinaDado>(this.apiUrl + '/' + id);
  }

}
