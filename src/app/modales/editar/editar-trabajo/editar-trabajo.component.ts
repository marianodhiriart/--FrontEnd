import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EjemploService } from 'src/app/Servicios/ejemplo.service';
import { ServicioEducacionService } from 'src/app/Servicios/servicio-educacion.service';
import { ServicioTrabajoService } from 'src/app/Servicios/servicio-trabajo.service';
import { Trabajo } from 'src/app/entidades/trabajo';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {

  form: FormGroup;
  descripcion: string = '';
  inicio: string = '';
  fin: string = '';
  institucion: string = '';
  trabajos: Trabajo = null;

  constructor(private builder:FormBuilder, private servicioTrabajo: ServicioTrabajoService, private route:ActivatedRoute,
    private router:Router, private ejemplo:EjemploService) { 
     this.form = this.builder.group({
    descripcion:['',[Validators.required]],
    inicio:['',[Validators.required]],
    fin:['',[Validators.required]],
    institucion:['',[Validators.required]],
  })
 }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.servicioTrabajo.verTrabajo(id).subscribe(data =>{
      this.trabajos = data;
    })
  }

  editarEducacion(): void{
    const id = this.route.snapshot.params['id'];
    this.servicioTrabajo.editarTrabajo(this.trabajos, id).subscribe(data=> {
      this.router.navigate(['']);
    })
  }

  enviar(event:Event){
    event.preventDefault();

    if(this.form.valid){
      this.editarEducacion()
      alert('Dato editado.');
      window.location.href = '/';
      
    }

    else{
      alert('Por favor revise los datos ingresados.')
    }
  }

}
