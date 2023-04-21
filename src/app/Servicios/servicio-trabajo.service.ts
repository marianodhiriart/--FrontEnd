import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from '../entidades/trabajo';

@Injectable({
  providedIn: 'root'
})
export class ServicioTrabajoService {

  url: string = "https://lengthy-vita-marianodhiriart.koyeb.app/trabajo";

  constructor(private http:HttpClient) { }

  public list(): Observable<Trabajo[]>{
    return this.http.get<Trabajo[]>(this.url + '/lista')
  }

  public verTrabajo(id:any): Observable<any>{
    return this.http.get<Trabajo[]>(this.url + `/ver/${id}`);
  }

  public borrarTrabajo(id:number): Observable<any>{
    return this.http.delete<any>(this.url + `/borrar/${id}`);
  }

  public agregarTrabajo(trab:Trabajo): Observable<any>{
    return this.http.post<any>(this.url + '/crear', trab);
  }

  public editarTrabajo(trab:Trabajo,id:number): Observable<any>{
    return this.http.put<any>(this.url + `/editar/${id}`, trab);
  }
}
