import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioTrabajoService } from 'src/app/Servicios/servicio-trabajo.service';
import { Trabajo } from 'src/app/entidades/trabajo';

@Component({
  selector: 'app-agregar-trabajo',
  templateUrl: './agregar-trabajo.component.html',
  styleUrls: ['./agregar-trabajo.component.css']
})
export class AgregarTrabajoComponent implements OnInit {
  form: FormGroup;
  descripcion: any;
  inicio: any;
  fin: any;
  institucion: any;


  constructor(private builder:FormBuilder, private trabajoS:ServicioTrabajoService) {
   this.form = this.builder.group(
    {
    descripcion:['', [Validators.required, Validators.maxLength(200)]],
    inicio: ['',[Validators.required]],
    fin:['',[Validators.required]],
    institucion:['',[Validators.required]]
   }
   )
   }

  ngOnInit(): void {
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
  get Inicio(){
    return this.form.get("inicio");
  }
  get Fin(){
    return this.form.get("fin");
  }
  get Institucion(){
    return this.form.get("institucion");
  }

  crearTrabajo(): void{
    const trabajo = new Trabajo (this.institucion, this.fin, this.inicio, this.descripcion);
    this.trabajoS.agregarTrabajo(trabajo).subscribe(data=>{"dato creado."});
    window.location.reload();
  }

  enviar(event:Event){
    event.preventDefault;

      if(this.form.valid){
        this.crearTrabajo();
      alert('Dato creado.')
      window.location.reload();
      }
      else{
        alert('Revise los datos ingresados por favor.')
      }
  }
  
}
