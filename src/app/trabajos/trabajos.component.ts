import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../Servicios/ejemplo.service';
import { ServicioTrabajoService } from '../Servicios/servicio-trabajo.service';
import { Trabajo } from '../entidades/trabajo';
import { LoginService } from '../Servicios/login.service';
@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {

//esto es para traer distintos datos
  trabajos: Trabajo[] ;

  //otro
  persona : string = '';

  logued: boolean;


constructor(private datos: EjemploService, private trabajoServicio:ServicioTrabajoService,
  private log:LoginService) { }

  ngOnInit(): void {
    this.trabajoServicio.list().subscribe(data =>{
      this.trabajos = data;
    })

    this.logued = this.estaLogueado();
  }


  estaLogueado():boolean{
   const dato = this.log.logueado;
   if(dato === "true"){
    return true;
   }
   else{
    return false;
   }
  }

  eliminar(id:number){
    this.trabajoServicio.borrarTrabajo(id).subscribe();
    alert('Dato eliminado.');
    window.location.reload();
  }

  }


