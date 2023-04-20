import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioEducacionService } from 'src/app/Servicios/servicio-educacion.service';
import { ServicioTrabajoService } from 'src/app/Servicios/servicio-trabajo.service';
import { Educacion } from 'src/app/entidades/educacion';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {
  form: FormGroup;
  descripcion: string = '';
  inicio: any;
  fin: any;
  institucion: string = '';
  titulo: string = '';

  constructor( private builder: FormBuilder, private educacionService:ServicioEducacionService) {
    this.form = this.builder.group({
      descripcion:['',[Validators.required]],
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      institucion:['',[Validators.required]],
      titulo: ['',[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get Descripcion(){
    return this.form.get('descripcion');
  }

  get Inicio(){
    return this.form.get('inicio');
  }

  get Fin(){
    return this.form.get('fin');
  }

  get Institucion(){
    return this.form.get('institucion');
  }

  get Titulo(){
    return this.form.get('titulo');
  }


  crearEducacion(){
    const educacion = new Educacion (this.descripcion, this.fin, this.inicio, this.institucion, this.titulo);
    return this.educacionService.agregarEducacion(educacion).subscribe();
  }

  enviar(event:Event): void{
    event.preventDefault();

    if(this.form.valid){
      this.crearEducacion();
      alert('Dato creado.');
      window.location.reload();
    }

    else{
      alert('Por favor revise los datos ingresados.');
    }
  }

}
