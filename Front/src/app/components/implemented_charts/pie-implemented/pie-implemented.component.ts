import { Component, OnInit } from '@angular/core';
import { QueryMdxOlapService } from 'src/app/servicios/database/olap_query.service';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { SearchFilterComponent } from '../../search-filter/search-filter.component';

@Component({
  selector: 'app-pie-implemented',
  templateUrl: './pie-implemented.component.html',
  styleUrls: ['./pie-implemented.component.css'],
})
export class PieImplementedComponent implements OnInit {
  a: any[] = [];
  public dataDimension: Label[] = ['sdf', 'sdf', 'sdf'];
  public dataValues: number[] = [1, 2, 3];
  constructor(
    private httpClient: HttpClient,
    private service: QueryMdxOlapService
  ) {}
  onChange() {
    
    this.getDataPie();
    
  }

  ngOnInit(): void {}

  getDataPie() {
    this.dataDimension=[];
    this.dataValues = [];
    console.log(this.service.globalSelectedYears);
    let dataToSend = {
      clients: this.service.globalSelectedClients,
      months: this.service.globalSelectedMonths,
      years: this.service.globalSelectedYears,
    };    
     let values: number[] = [];
    let items: string[] = [];
    this.httpClient
      .post('http://localhost:60660/daozara/nortwind/GetDataPie', dataToSend)
      .subscribe(
        (res: any) => {
          const temp_max = res.map((res) => res);
          temp_max.forEach((element) => {
            items.push(element.clientesNombre);
            values.push(element.total);
          });
          this.dataDimension = items;
          this.dataValues = values;
        },
        (error) => {
          console.error(error);
          items = [];
        }
      );
  }
}
