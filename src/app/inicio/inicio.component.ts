import { Component, OnInit } from '@angular/core';

// importamos las librerias de formulario que vamos a necesitar

import { FormBuilder, FormGroup, Validators } from
'@angular/forms';
import { LoginService } from '../Servicios/login.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
form: FormGroup;
logueado: boolean;

  constructor(private formBuilder: FormBuilder, private logued:LoginService){ 
    //creamos grupo de control para formulario de inicio
  
  this.form= this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]]

  })
  }
  ngOnInit() {
    this.logueado = this.estaLogueado();
  }
 //metodos a partir de ahora
 //toma datos password
  get Password(){
return this.form.get("password");
}

//toma datos mail
get Mail(){
return this.form.get("email");
}

//metodo de validacion de password
get PasswordValid(){
return this.Password?.touched && !this.Password?.valid;
//metodo de validacion de mail
}
get MailValid () {
  return this.Mail?.touched && !this.Password?.valid;
}

estaLogueado():boolean{
const data = this.logued.logueado;
   
  if(data === "true"){
    return true;
  }

  else{
    return false;
  }
}




  }
