import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-kendo-table',
  templateUrl: './kendo-table.component.html',
  styleUrls: ['./kendo-table.component.scss']
})
export class KendoTableComponent implements OnInit {

  public gridData: any[] = products;

  constructor() { }

  ngOnInit() {
  }

}
