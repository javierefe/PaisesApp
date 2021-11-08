import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators' // resive un observable y regresa un observable

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    // this.activateRoute.params
    //   .subscribe( ({id}) => {
    //     console.log(id);

    //     this.paisService.getPaisPorAlpha( id )
    //       .subscribe( pais => {
    //         console.log(pais)
    //       })
    //   })

    // otra forma , opcion a lo de arriba
    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha( id)),
        tap( console.log ) // tap, imprime lo que regresa el observable
      )
      .subscribe( pais => this.pais = pais);
  }

}
