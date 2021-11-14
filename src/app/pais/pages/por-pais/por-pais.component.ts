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
  
  // importante injectar el servicio
  constructor( private paisService: PaisService ){}
  

  // termino viene del por pais componenet (<psis inoput>) </pis>), se emitio desde alli
  buscar( termino:string ){
    this.termino = termino
    this.hayError = false;
    // console.log(this.termino)
    

    // para que un observable se dispare tienes que estar subscrito
    this.paisService.buscarPais(this.termino)
    // el suscribe accepta 3 parametros, next, error yy complete
    // (paises) actua como next
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
