import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class ServicioEducacionService {

  url: string = "https://lengthy-vita-marianodhiriart.koyeb.app/educacion";

  constructor(private http:HttpClient) {}

  public list(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url + '/lista');
  }

  public verEducacion(id: any): Observable<any>{
    return this.http.get<Educacion[]>(this.url + `/ver/${id}`)
  }

  public borrarEducacion(id: any): Observable<Educacion[]>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }

  public agregarEducacion(educ:Educacion): Observable<any>{
    return this.http.post<any>(this.url + '/crear', educ);
  }

  public editarEducacion(educ:Educacion, id:number): Observable<any>{
    return this.http.put<any>(this.url + '/editar/${id}', educ);
  }
}
