import { Component, OnInit } from '@angular/core';
import { EjemploService } from 'src/app/Servicios/ejemplo.service';
import { LoginService } from 'src/app/Servicios/login.service';
import { ServicioPersonaService } from 'src/app/Servicios/servicio-persona.service';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.component.html',
  styleUrls: ['./fotoperfil.component.css']
})
export class FotoperfilComponent implements OnInit {

  logued: boolean;

  personas : Persona[];

  constructor( private dato: EjemploService, private sPersona:ServicioPersonaService,
    private login:LoginService) { }

  ngOnInit(): void {
    this.llamarPersona();
    this.logued = this.estaLogueado();
  }

  llamarPersona(){
    this.sPersona.list().subscribe(data=>{this.personas = data})
  }

  estaLogueado():boolean{
    var dato = this.login.logueado;
    if (dato === "true"){
      return true;
    }
    else{
      return false
    }
  }

 

}
