import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import { Router, RouterModule} from '@angular/router';

// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
@Component({
    selector: 'clickable-cell',
    template: '<a [routerLink]="[\'/blog\']" [queryParams]="{id: params.value }">Edit</a>'
})
export class ClickableParentComponent implements ICellRendererAngularComp {
    public params: any;
    public cell: any;

    agInit(params: any): void {
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
    }
    refresh(): boolean {
        return false;
    }
}