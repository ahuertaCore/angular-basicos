import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes        : string[] = ['Batman','Spiderman','Robin','Gordon Freeman','Superman'];
  public heroesBorrados: string[] = [];
  public heroeSeleccionadoDelBoton: string = '';

  public borrarHeroe_old(): void{
    console.log('Borrando......');
    if(this.heroes.length>0){
      console.log('Se borro el heroe: ',this.heroes.pop());
    }else{
      console.log('Array Vacio de heroes: ');
    }
  }

  public borrarHeroe(): void{
    const heroeElement = this.heroes.shift();

    if(heroeElement){
      this.heroesBorrados.push(heroeElement);
    }

    //Si la constante "heroeElement", llegara a contener undefined, entonces el operador "||" le asignaria "---------" a la variables
    this.heroeSeleccionadoDelBoton = heroeElement || '---------';

  }

  public reingresarHeroe(): void{
    const heroeElement = this.heroesBorrados.shift();

    if(heroeElement){
      this.heroes.push(heroeElement);
    }

    
    this.heroeSeleccionadoDelBoton = heroeElement || '++++++++';
  }

}
