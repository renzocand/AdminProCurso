import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {


    this.regresaObservable().pipe(
      
    )

      .subscribe(
        numero => console.log('Subs', numero),
        error => console.error('Error en el obs', error),
        () => console.log('El obs termino')
      )

  }
  ngOnInit() {
  }

  regresaObservable():Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;

        const salida = {
          valor:contador
        }

        observer.next(salida);

        if (contador === 3) {
          clearInterval(intervalo)
          observer.complete();
        }
        // if (contador == 2) {
        //   clearInterval(intervalo)
        //   observer.error('auxilio')
        // }
      }, 1000)
    }) .pipe(map(resp =>{
      return resp.valor
    }))
  } 

}
