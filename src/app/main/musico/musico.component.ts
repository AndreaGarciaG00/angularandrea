import { Component } from '@angular/core';
import { Musico } from '../interface/musico.interface';
import { MusicoService } from '../services/musico.service';

@Component({
  selector: 'app-musico',
  templateUrl: './musico.component.html',
  styleUrls: ['./musico.component.css']
})
export class MusicoComponent {


  constructor(private musico: MusicoService){

  }

  get musicos(): Musico[] {
    return this.musico.musicos;
  }

  inicializar(): void {
    this.musico.inicializar();
  }

}
