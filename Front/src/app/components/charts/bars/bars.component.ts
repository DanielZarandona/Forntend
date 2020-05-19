import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartDataSets, ChartData } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { QueryMdxOlapService } from 'src/app/servicios/database/olap_query.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.css'],
})
export class BarsComponent {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: ChartDataSets[] = [{ data: [], label: '' }];
  
  public chartClicked(e: any): void {
    
  }

  public chartHovered(e: any): void {
    
  }
  constructor(private httpClient: HttpClient,private service: QueryMdxOlapService) {}

  randomize() {
    let dataToSend = {
      clients: this.service.globalSelectedClients,
      months: this.service.globalSelectedMonths,
      years: this.service.globalSelectedYears,
    }; 
    this.httpClient
      .post(`http://localhost:89/isscjrmp/nortwind/GetDataBar`, dataToSend)
      .subscribe((res: any) => {
        this.barChartData = res.map((res) => res);
        console.log(this.barChartData);
      });
    this.httpClient
      .post(`http://localhost:89/isscjrmp/nortwind/GetLabelsBar`, dataToSend)
      .subscribe((res: any) => {
        this.barChartLabels = res.map((res) => res);
        console.log(res);
      });
   
    return null;
  }
}
