import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule} from '@angular/router';
import { ClickableParentComponent } from "./clickable.parent.component";
import {GridOptions } from "ag-grid-community";
@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  title = 'list';

   columnDefs = [
   		{headerName: 'Image', field: 'id',
   		cellRenderer: params => {
       		return '<img src="api/image/'+params.value+'"/>';
    	}},
        {headerName: 'Title', field: 'title', filter: "agTextColumnFilter" },
        {headerName: 'Category', field: 'category' },
        {headerName: 'Description', field: 'description'},
        {headerName: 'Actions', field: 'id',
        	 cellRendererFramework: ClickableParentComponent
   		}
    ];

   gridOptions = <GridOptions>{
   		columnDefs: this.columnDefs,
    	enableFilter: true
  };

    constructor(private http: HttpClient,private router:Router) {

    }

     ngOnInit() {
    	this.http.get('api/blog/')
    	.subscribe(
        	(rowData:any[])=>{
        		this.gridOptions.api.setRowData(rowData);
        		this.gridOptions.api.sizeColumnsToFit();
        	}
        );
    }
}
