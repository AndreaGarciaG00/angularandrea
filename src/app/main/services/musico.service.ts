import { Injectable } from "@angular/core";
import { Musico } from '../interface/musico.interface';


@Injectable()
export class MusicoService {
    
    private _musicos: Musico[] = [];
    
    constructor(){}

    get musicos (): Musico[] {
        return this._musicos;
    }

    inicializar(): void {
        this._musicos.push({
          nombre: 'Amadeus Mozard',
          trabajo: 'Compositor',
          instrumento: 'Piano'
        },
          {
            nombre: 'Ludwig Van Beethoven',
            trabajo: 'Compositor',
            instrumento: 'Piano'
          },
          {
            nombre: 'Frederic Chopin',
            trabajo: 'Compositor',
            instrumento: 'Piano'
          })
    }

    agregarMusico(musico: Musico): void{
        this._musicos.push(musico);
    }
}