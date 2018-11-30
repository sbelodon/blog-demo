import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {AppComponent} from './app.component';

@Component({
    templateUrl: './clickable.parent.component.html',
})
export class ClickableParentComponent implements ICellRendererAngularComp {
    public params: any;
    public cell: any;

    constructor(private http: HttpClient, private appComponent: AppComponent) {
    }

    agInit(params: any): void {
        console.log('params: ', params);
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
    }

    refresh(): boolean {
        return true;
    }

    onDelete(param) {
        this.http.delete('api/blog/' + param.id)
            .catch((error: any) => Observable.throw(error || 'Server error'))
            .subscribe((deletedItemsCount) => {
                this.http.get('api/blog/', {params: {userId: this.appComponent.getUserId()}})
                    .subscribe(
                        (rowData: any[]) => {
                            this.params.api.setRowData(rowData);
                            this.params.api.sizeColumnsToFit();
                        }
                    );
            });
    }
}