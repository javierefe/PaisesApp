import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent{

  termino: string = "";
  hayError: boolean = false;
  paises : Country[] = [];
  
  constructor( private paisService: PaisService ){}
  
  buscar( termino:string ){
    this.termino = termino
    this.hayError = false;
    // console.log(this.termino)
    
    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) => {
        
        console.log(paises);

        // if(typeof paises ==='object'){
        //   console.log('error 404');
        //   this.hayError = true;
        // }

        this.paises = paises;

        if(!Array.isArray(paises)){
          console.log('error')
          this.hayError = true;
        }

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })

      
  }

  sugerencias( termino: string){
    this.hayError = false;
  }

}
