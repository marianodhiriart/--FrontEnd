import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { EjemploService } from 'src/app/Servicios/ejemplo.service';
import { ServicioEducacionService } from 'src/app/Servicios/servicio-educacion.service';
import { Educacion } from 'src/app/entidades/educacion';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  form: FormGroup;
  descripcion: string = '';
  inicio: string = '';
  fin: string = '';
  institucion: string = '';
  titulo: string = '';
  educaciones: Educacion = null;
  idEducacion: number;

  constructor(private builder:FormBuilder, private servicioEducacion: ServicioEducacionService, private route:ActivatedRoute,
    private router:Router, private ejemplo:EjemploService) { 
     this.form = this.builder.group({
    descripcion:['',[Validators.required]],
    inicio:['',[Validators.required]],
    fin:['',[Validators.required]],
    institucion:['',[Validators.required]],
    titulo: ['',[Validators.required]]
  })
 }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.servicioEducacion.verEducacion(id).subscribe(data =>{
      this.educaciones = data;
    })
  }

  editarEducacion(): void{
    const id = this.route.snapshot.params['id'];
    this.servicioEducacion.editarEducacion(this.educaciones, id).subscribe(data=> {
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
