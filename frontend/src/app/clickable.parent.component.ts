import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {AppComponent} from './app.component';
import {Router} from "@angular/router";

@Component({
    templateUrl: './clickable.parent.component.html',
})
export class ClickableParentComponent implements ICellRendererAngularComp {
    public params: any;
    public cell: any;

    constructor(
        private http: HttpClient,
        private appComponent: AppComponent,
        private router: Router
    ) {
    }

    agInit(params: any): void {
        console.log('params: ', params);
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
    }

    refresh(): boolean {
        return true;
    }

    onEdit(param) {
        this.router.navigate(['/blog'], { queryParams: { id: param.id  } });
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