import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent{

  termino: string = "";
  hayError: boolean = false;
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencias: boolean = false;

  // importante injectar el servicio
  constructor( private paisService: PaisService ){}
  

  // termino viene del por pais componenet (<psis inoput>) </pis>), se emitio desde alli
  buscar( termino:string ){
    this.mostrarSugerencias = false;
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais( termino)
      .subscribe( paises => {
        this.paisesSugeridos = paises;
        if(!Array.isArray(paises)){
          this.paisesSugeridos = [];
        }
      }, (err) => {
        // this.hayError = true;
        this.paisesSugeridos = [];
      }
        
      );
  }

  buscarSugerido( termino: string) {
    this.buscar( termino );
  }

}
