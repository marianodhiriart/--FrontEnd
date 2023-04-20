import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../entidades/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonaService {

  url: string = 'http://localhost:8080/persona';

  constructor(private http:HttpClient) { }

  public list(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.url + '/lista')
  }

  public verPersona(id:any): Observable<any>{
    return this.http.get<Persona[]>(this.url + `/ver/${id}`);
  }

  public borrarPersona(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }

  public agregarPersona(pers:Persona): Observable<any>{
    return this.http.post<any>(this.url + '/crear', pers);
  }

  public editarPersona(pers:Persona,id:number): Observable<any>{
    return this.http.put<any>(this.url + `/editar/${id}`, pers);
  }
}
