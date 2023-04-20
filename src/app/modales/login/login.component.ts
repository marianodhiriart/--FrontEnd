import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  email: string;
  password: string;

  constructor(private builder:FormBuilder, private logued:LoginService) { 
      this.form = this.builder.group(
    {
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(5)]]
    }
  )
}

ngOnInit(): void {
}

closeModal(){
 window.location.href = '/';
}
get Email(){
  return this.form.get("email");
}
get Password(){
  return this.form.get("password");
}
usuarioInvalid(){
  return this.Email?.touched && !this.Email?.valid;
}

  onEnviar(event: Event) {
    event.preventDefault ;
  if (this.form.valid) {
     this.logued.login(this.form.value);
     window.location.href = '/';
    }else{
    this.form.markAllAsTouched();
    alert("Alguno de los datos es erroneo.")
    }
  }

}
