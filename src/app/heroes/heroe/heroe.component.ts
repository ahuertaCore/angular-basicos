import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{

    public nombre: string = 'Ironman';
    public edad: number = 45;

    public get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    public obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    public cambiarNombre(): void{
        this.nombre = 'Batman';
    }

    public cambiarEdad(): void{
        this.edad = 66;
    }

}