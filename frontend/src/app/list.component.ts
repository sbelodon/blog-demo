import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ClickableParentComponent} from "./clickable.parent.component";
import {ColDef, GridOptions} from "ag-grid-community";
import {CookieService} from 'ngx-cookie-service';
import {AppComponent} from './app.component';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    title = 'list';

    columnDefs = [
        {
            autoHeight: true,
            headerName: 'Image',
            field: 'id',
            cellStyle: {textAlign: 'center'},
            width: 75,
            cellRenderer: params => {
                let image = params.data.image;
                if(image && image.length > 0) {
                    return '<img src="api/image/' + params.value + '" style="width: 50px; height: 50px;"/>';
                }
                return "";
            }
        },
        {
            autoHeight: true,
            headerName: 'Title',
            field: 'title',
            filter: "agTextColumnFilter"
        },
        {
            autoHeight: true,
            headerName: 'Category',
            field: 'category'
        },
        {
            autoHeight: true,
            headerName: 'Description',
            field: 'description'
        },
        {
            autoHeight: true,
            headerName: 'Actions',
            field: 'id',
            cellRendererFramework: ClickableParentComponent
        }
    ] as ColDef [];

    gridOptions = <GridOptions>{
        columnDefs: this.columnDefs,
        enableFilter: true,
        enableSorting: true,
        gridAutoHeight: true
    };

    constructor(
        private http: HttpClient,
        private router: Router,
        private cookieService: CookieService,
        private appComponent: AppComponent,
        private spinner: NgxSpinnerService
    ) {

    }

    ngOnInit() {
        this.spinner.show();
        this.http.get('api/blog/', {params: {userId: this.appComponent.getUserId()}})
            .subscribe(
                (rowData: any[]) => {
                    this.gridOptions.api.setRowData(rowData);
                    this.gridOptions.api.sizeColumnsToFit();
                    this.spinner.hide();
                }
            );
    }
}
