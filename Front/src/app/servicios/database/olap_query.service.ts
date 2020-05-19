import { Injectable } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PieComponent } from 'src/app/components/charts/pie/pie.component';
import { AppComponent } from 'src/app/app.component';
import { PieImplementedComponent } from 'src/app/components/implemented_charts/pie-implemented/pie-implemented.component';


@Injectable()
export class QueryMdxOlapService {
  
  constructor(private httpClient: HttpClient) {}
  private _globalSelectedClients: any[];
  public get globalSelectedClients(): any[] {
    return this._globalSelectedClients;
  }
  public set globalSelectedClients(value: any[]) {
    this._globalSelectedClients = value;
  }

  private _globalSelectedMonths: any[];
  public get globalSelectedMonths(): any[] {
    return this._globalSelectedMonths;
  }
  public set globalSelectedMonths(value: any[]) {
    this._globalSelectedMonths = value;
  }

  private _globalSelectedYears: any[];
  public get globalSelectedYears(): any[] {
    return this._globalSelectedYears;
  }
  public set globalSelectedYears(value: any[]) {
    this._globalSelectedYears = value;
  }

  private _ee: string;
  public get ee(): string {
    return this._ee;
  }
  public set ee(value: string) {
    this._ee = value;
  }
  private componenteconarreglosdeoie: PieImplementedComponent;
  heroes: any[] = [];
  getItemsCmb() {
    this.httpClient
      .get(`http://localhost:60660/daozara/nortwind/GetClients`)
      .pipe(map((result: any) => (this.heroes = result.datosDimension)));
    return this.heroes;
  }

  public getBarDataFilter() {
    const datos: any[] = [];
    
    this.httpClient
      .get(`http://localhost:60660/daozara/nortwind/GetAll2`)
      .subscribe(
        (data) => {
          return data;
        },
        (error) => {
          console.error(error);
        }
      );
    return datos;
  }

  public test() {
    return 1;
  }
  public getLineChartDataSet = (): ChartDataSets[] => {
    return [
      { data: [65, 45], label: 'Life Without Fear' },
      { data: [10, 9], label: 'Emotional Security: A New Algorithm' },
    ];
  };
  public GetLabelLineChartLabels(dataset: ChartDataSets[]): Label[] {
    const labelsArray: Label[] = [];
    dataset.forEach((element) => {
      labelsArray.push(element.label);
    });
    return labelsArray;
  }

  getItemsByDimension(): string[] {
    let items: string[] = [];
    this.httpClient
      .get(`http://localhost:60660/daozara/nortwind/GetClients`)
      .subscribe(
        (res: any) => {
          const temp_max = res.map((res) => res);
          temp_max.forEach((element) => {
            items.push(element.clientesNombre);
            
          });
        },
        (error) => {
          console.error(error);
          items = [];
        }
      );
    return items;
  }


}
