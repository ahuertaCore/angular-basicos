

import {Component} from '@angular/core';

@Component({
    selector   : 'app-contador',
    template   : `
        <h1> {{title}} </h1>
        <h3> La base es <strong> {{this.base}} </strong> </h3>
        <!--<button (click)="acumular(+this.base);" > +{{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-1*this.base);" > -{{base}} </button>-->
        <button (click)="acumular2(+this.base);" > +{{base}} </button>
        <span> {{this.getNumero2()}} </span>
        <button (click)="acumular2(-1*this.base);" > -{{base}} </button>
    `
})
export class ContadorComponent{
    public title:  string = 'bases Contador APP';
    public numero: number = 10;
    public base:   number = 5;
  
    public acumular(valor: number){
      this.numero += valor;
    }

    private static numero2: number = 0;

    public getNumero2(): number {
      return ContadorComponent.numero2; 
    }
    

    public acumular2(valor: number){
      ContadorComponent.numero2 += valor;
    }
}