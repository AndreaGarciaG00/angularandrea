import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Musico } from '../interface/musico.interface';
import { MusicoService } from '../services/musico.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() musicoForm: Musico = {
    nombre: '',
    trabajo: '',
    instrumento: ''
  }

  constructor(private musico: MusicoService) {}

  //@Output() nuevoMusico: EventEmitter<Musico> = new EventEmitter()

  agregar(): void{
    this.musico.agregarMusico(this.musicoForm);
    this.musicoForm = {
      nombre: '',
      trabajo: '',
      instrumento: ''
   } 
 }
}
