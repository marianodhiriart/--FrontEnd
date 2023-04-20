import { Component, OnInit } from '@angular/core';
import { EjemploService } from 'src/app/Servicios/ejemplo.service';

@Component({
  selector: 'app-placeholder-educacion',
  templateUrl: './placeholder-educacion.component.html',
  styleUrls: ['./placeholder-educacion.component.css']
})
export class PlaceholderEducacionComponent implements OnInit {

  abrirModal: boolean = false;

  constructor(private modal:EjemploService) { }

  ngOnInit(): void {
    this.modalAbierto();
  }

  modalAbierto(){
   
  }

}
