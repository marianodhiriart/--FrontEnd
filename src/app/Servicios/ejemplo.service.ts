import { EventEmitter, Injectable } from '@angular/core';

//suscribirse a los datos y que reciba respuesta asincrona
import { Observable, BehaviorSubject } from 'rxjs';
//Hacer peticionesy CRUD
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  private newId = new BehaviorSubject(0);
  idActual = this.newId.asObservable();

  constructor(private http:HttpClient) { }

  //metodo observable que devuelve datos
getDatos():Observable<any>{

  //retorna de datos utilizando el metodo get ed Httpclient que llama a la base de datos JSON o a una URL
  return this.http.get ('./assets/db/primer.json');

  //aca podria poner un callback para ser Lo opción de problema de conexión del servidor

}

//metodo para pasar los id como parametros

getId(id:number){

  this.newId.next(id);
  console.log(this.idActual);

}

$modal = new EventEmitter<any>();

}
