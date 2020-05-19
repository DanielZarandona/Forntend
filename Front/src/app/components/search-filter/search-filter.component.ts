import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryMdxOlapService } from 'src/app/servicios/database/olap_query.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit {
  constructor(private service: QueryMdxOlapService) {}
  dimensions: string[] = ['Cliente'];
  months: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  public clients = this.service.getItemsByDimension();
  public years: string[] = ['1996', '1997', '1998'];
  public selectedDimension = [];
  public selectedClients = [];

  public selectedMonths = [];
  public selectedYears = [];
  ngOnInit() {
    
    console.log(this.clients);
  }
  onChange() {
    
    const selectedC = this.selectedClients.map((res) => res.$ngOptionLabel);
    this.service.ee = 'From filter';
    this.service.globalSelectedClients = selectedC;
    this.service.globalSelectedMonths = this.selectedMonths as any[];
    this.service.globalSelectedYears = this.selectedYears as any[];
    console.log(this.service.globalSelectedYears);
  }
}
