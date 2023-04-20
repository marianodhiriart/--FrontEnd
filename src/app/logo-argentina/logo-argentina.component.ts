import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Servicios/login.service';

@Component({
  selector: 'app-logo-argentina',
  templateUrl: './logo-argentina.component.html',
  styleUrls: ['./logo-argentina.component.css']
})
export class LogoArgentinaComponent implements OnInit {
  logueado: boolean;

  constructor(private logued:LoginService) { }

  ngOnInit(): void {
    this.logueado = this.estaLogueado();
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

    desloguear(){
      this.logued.unlog();
      window.location.reload();
    }

}
