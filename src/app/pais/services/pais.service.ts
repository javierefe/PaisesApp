import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';
  


  // es importante injectar el HttpClient
  constructor( private http: HttpClient ) { }

  // es factible usar el fetch pero se usara el http de angular common que viene de angular
  // para eso se debe importar en el app.module

  // buscar pais retorna un observable
  // retorna un arreglo con todos los paises
  buscarPais( termino: string ): Observable<Country[]>{  
    // construyendo url
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion( termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/regionalbloc/${termino}`
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( termino: string ): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country>( url );
  }

}
