import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
        {headerName: 'Title', field: 'title' },
        {headerName: 'Category', field: 'category' },
        {headerName: 'Description', field: 'description'}
    ];

    rowData: any;

    constructor(private http: HttpClient) {

    }

	
    ngOnInit() {
        this.rowData = this.http.get('api/blog/');
    }
}
