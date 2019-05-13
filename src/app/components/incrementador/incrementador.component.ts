import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;

  @Input('nombre') leyenda:string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() { 
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.porcentaje);

  }

  ngOnInit() {
  }

  onChanges( newValue:number ){
    // let elemenHTML:any = document.getElementsByName('porcentaje')[0];
    // console.log(this.txtProgress);

    if(newValue >=100){
      this.porcentaje = 100;
    }else if(newValue <=0){
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValue;
    }
    // elemenHTML.value =  this.porcentaje; 
    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje)
  }

  cambiarValor(valor: number) {

    if (this.porcentaje >= 100 && valor > 0) {
      return
    }
    if (this.porcentaje <= 0 && valor < 0) {
      return
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje)

    this.txtProgress.nativeElement.focus()
  }

}
