import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule} from '@angular/router';
import { ClickableParentComponent } from "./clickable.parent.component";

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
        {headerName: 'Description', field: 'description'},
        {headerName: 'Actions', field: 'id',
        	 cellRendererFramework: ClickableParentComponent
   		}
    ];

    rowData: any;

    constructor(private http: HttpClient,private router:Router) {

    }

    ngOnInit() {
        this.rowData = this.http.get('api/blog/');
    }
}
