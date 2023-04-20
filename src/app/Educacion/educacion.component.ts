import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../Servicios/ejemplo.service';
import { Observer } from 'rxjs';
import { ServicioEducacionService } from '../Servicios/servicio-educacion.service';
import { LoginService } from '../Servicios/login.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class educacionComponent implements OnInit {
//esto es para traer distintos datos
educaciones : any = [];
trabajo : any = [];
persona: any = [];
logued: boolean;

//otro
nombre : string = '';


  constructor(private datos: EjemploService, private educ:ServicioEducacionService,
    private log:LoginService) { }

  ngOnInit(): void {
    this.llamarEducacion();
    this.logued = this.estaLogueado();
  }

  llamarEducacion(){
    this.educ.list().subscribe(data =>{this.educaciones = data})
  }

  estaLogueado(): boolean{
    var dato = this.log.logueado;
    if(dato === "true"){
      return true;
    } 

    else{
      return false;
    }
  }

  eliminar(id:number){
    this.educ.borrarEducacion(id).subscribe();
    alert('Dato eliminado.');
    window.location.reload();
  }

}

