import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // se emite cuando la persona deja de escribir
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  // observable especial rxjs
  debouncer: Subject<string> = new Subject();

  termino: string = "";

  //el ngOnInit se dispara una unica vez cuando el componente esat inicializado
  ngOnInit() {
    this.debouncer
      .pipe(
        debounceTime(300) // no emitas el suscribe hasta que el obserbable deje de emitir en el tiempo de 300
      )
      .subscribe(valor => {
        // console.log('debouncer:', valor)
        this.onDebounce.emit( valor )
      })
  }

  buscar() {
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(){
    // const valor = event?.target.value;
    
    this.debouncer.next(this.termino);
  }
}
