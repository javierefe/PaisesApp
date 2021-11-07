import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false;
  capitales : Country[] = [];

  constructor( private capitalService: PaisService) { }

  buscar( termino: string){
    this.termino = termino;
    this.hayError = false;

    this.capitalService.buscarCapital( this.termino )
      .subscribe((capitales) =>{
        console.log(capitales);
        this.capitales = capitales;

        if(!Array.isArray(capitales)){
          console.log('error')
          this.hayError = true;
        }

      }, (err) => {
        this.hayError = true;
        this.capitales = []
      })
    
  }


}
