import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logueado: string = sessionStorage.getItem("logueado");
  mail: string = 'marianodhiriart@hotmail.com';
  contraseña: string = '12345';

  constructor() { }

  login(obj:any){

    if(obj.email == this.mail && obj.password == this.contraseña){
      window.sessionStorage.setItem("logueado", "true");
      alert('Usuario logueado.')
      window.location.reload();
    }

    else{
      window.sessionStorage.setItem("logueado", "false");
      alert('Dato erroneo, por favor verifique.')
    }
    console.log(this.logueado);
  }

  unlog(){
    window.sessionStorage.setItem("logueado", "false");
  }
}
