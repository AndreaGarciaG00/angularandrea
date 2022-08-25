import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { MainComponent } from './main.component';
import { AgregarComponent } from './agregar/agregar.component';
import { MusicoComponent } from './musico/musico.component';
import { MusicoService } from "./services/musico.service";



@NgModule({
    declarations: [
        MainComponent,
        AgregarComponent,
        MusicoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        MainComponent
    ],
    providers: [
        MusicoService
    ],
    bootstrap: [MainComponent]
})

export class MainModule {

}