import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  @Input() leyenda:string = 'Leyenda'

  
  @Input('ChartLabels') public doughnutChartLabels: Label[] = [];
  @Input('ChartData') public doughnutChartData: MultiDataSet = [];
  @Input('ChartType') public doughnutChartType: ChartType = '';


  constructor() { }

  ngOnInit() {
  }
}
