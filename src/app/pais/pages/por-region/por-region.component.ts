import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  
    button {
      margin-right: 5px;
    }

  `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EUU', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']; 
  regionActiva: string = '';
  paises: Country[] = [];
  
  constructor( private paisService: PaisService) { }

  activarRegion( region: string){
    
    if(region === this.regionActiva) {
      return
    }

    this.regionActiva = region;
    this.paises= [];
    // TODO hacer el llamado al servicio
    this.paisService.buscarRegion (this.regionActiva)
      .subscribe( paises => {
        console.log( paises )
        this.paises = paises;
      })
  }

  getClaseCSS (region: string): string {
    return (region === this.regionActiva) 
            ? 'btn btn-primary' 
            : 'btn btn-outline-primary'
  }

  ngOnInit(): void {
  }

}
