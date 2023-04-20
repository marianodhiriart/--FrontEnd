import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoArgentinaComponent } from './logo-argentina/logo-argentina.component';
import { InicioComponent } from './inicio/inicio.component';
import { FotoperfilComponent } from './fotoperfil/fotoperfil/fotoperfil.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { educacionComponent } from './Educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { AgregarEducacionComponent } from './modales/agregar/agregar-educacion/agregar-educacion.component';
import { AgregarTrabajoComponent } from './modales/agregar/agregar-trabajo/agregar-trabajo.component';
import { EditarTrabajoComponent } from './modales/editar/editar-trabajo/editar-trabajo.component';
import { EditarEducacionComponent } from './modales/editar/editar-educacion/editar-educacion.component';
import { EjemploService } from './Servicios/ejemplo.service';
import { PlaceholderEducacionComponent } from './modales/placeholder/placeholder-educacion/placeholder-educacion.component';
import { LoginComponent } from './modales/login/login.component';
import { EditarPersonaComponent } from './modales/editar/editar-persona/editar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoArgentinaComponent,
    InicioComponent,
    FotoperfilComponent,
    HabilidadesComponent,
    TrabajosComponent,
    educacionComponent,
    ProyectosComponent,
    FooterComponent,
    AgregarEducacionComponent,
    AgregarTrabajoComponent,
    EditarTrabajoComponent,
    EditarEducacionComponent,
    PlaceholderEducacionComponent,
    LoginComponent,
    EditarPersonaComponent
  ],
  imports: [
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          FormsModule,
          ReactiveFormsModule
           
      ],

     providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
