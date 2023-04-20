import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ServicioPersonaService } from 'src/app/Servicios/servicio-persona.service';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  form:FormGroup;
  apellido: string = '';
  edad: string = '';
  nombre: string = '';
  sobreMi: string = '';
  personas: Persona = null;


  constructor(private builder:FormBuilder, private perso:ServicioPersonaService,
    private route:ActivatedRoute, private router:Router ) {
    this.form = this.builder.group({
      apellido:['',[Validators.required]],
      edad:['',[Validators.required]],
      nombre:['',[Validators.required]],
      sobreMi:['',[Validators.required]],
    })
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.perso.verPersona(id).subscribe(data =>{
      this.personas = data;
    })
  }

  get Descripcion(){
    return this.form.get('descripcion');
  }
  get Edad(){
    return this.form.get('edad');
  }

  editarPersona(): void{
    const id = this.route.snapshot.params['id'];
    this.perso.editarPersona(this.personas, id).subscribe(data=>{this.router.navigate([''])})

  }


  enviar(event:Event){
    event.preventDefault();

    if(this.form.valid){
      this.editarPersona();
      alert('Dato de persona editado.');
      window.location.href = '/';
    }

  }

}
