import { Component } from "@angular/core";
import { Musico } from "./interface/musico.interface";

@Component({
   selector: 'app-main',
   templateUrl: 'main.component.html',
   styleUrls: ['main.component.css']
})
export class MainComponent {

   musicos: Musico[] = [];
   
   musicoForm: Musico = {
      nombre: 'Antonio Vivaldi',
      trabajo: 'Compositor',
      instrumento: 'Violin'
   }

}