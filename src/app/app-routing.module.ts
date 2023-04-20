import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { educacionComponent } from './Educacion/educacion.component';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { AgregarEducacionComponent } from './modales/agregar/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './modales/editar/editar-educacion/editar-educacion.component';
import { EditarTrabajoComponent } from './modales/editar/editar-trabajo/editar-trabajo.component';
import { LoginComponent } from './modales/login/login.component';
import { EditarPersonaComponent } from './modales/editar/editar-persona/editar-persona.component';

const routes: Routes = [
{path:'trabajos' , component: TrabajosComponent},
{path: 'educacion' , component: educacionComponent},
{path: 'agregarEducacion' , component: AgregarEducacionComponent},
{ path: 'editarEducacion/:id', component: EditarEducacionComponent },
{ path: 'editarTrabajo/:id', component: EditarTrabajoComponent },
{ path: 'login', component: LoginComponent },
{ path:'editarPersona/:id', component: EditarPersonaComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
