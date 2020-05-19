import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { QueryMdxOlapService } from 'src/app/servicios/database/olap_query.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css'],
})
export class LinesComponent implements OnInit {

  constructor(private _service: QueryMdxOlapService) {
    console.log('Constructor');
  }
  public customer$: string[];
  public lineChartData: ChartDataSets[] = this._service.getLineChartDataSet();
  
  public lineChartLabels: Label[] = this._service.GetLabelLineChartLabels(
  
    this.lineChartData
  );
  public lineChartOptions: any = {
    responsive: true,
  };

  public lineChartColors: any[] = ['rgba(255,0,0,1)', 'rgba(10,255,0,0.3)', 'rgba(0,13,255,1)', 'rgba(196,79,244,1)','rgba(16,79,24,1)','rgba(34,239,24,1)'];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  public aaaa: any = this._service.getItemsCmb();
  ngOnInit(): void {}

  public randomize(): void {
    console.log("aaaaaaaaaaaaaaaaaaaa");
    this.customer$ = this._service.getItemsByDimension();
    console.log(this.customer$);
    console.log("aaaaaaaaaaaaaaaaaaaa");
  }

  public forInTable(): void {}
  
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
