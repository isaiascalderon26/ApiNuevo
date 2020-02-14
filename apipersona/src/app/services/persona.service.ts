import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private baseEndpoint = 'http:localhost:8090/api/personas'
  constructor(private http: HttpClient) { }

  public listar(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.baseEndpoint)
  }

  public ver(id: number):Observable<Persona>{
    return this.http.get<Persona>(`${this.baseEndpoint}/${id}`);
  }

  public crear(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.baseEndpoint, persona, {headers: this.cabeceras});
  }

  public editar(persona: Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.baseEndpoint}/${persona.id}`, persona, {headers: this.cabeceras} );
  }

  public eliminar(id: number): Observable<void>{
    resturn this.htttp.delete<void>(`${this.baseEndpoint}/${id}`);
  }

}