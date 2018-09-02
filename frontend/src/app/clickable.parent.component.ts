import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import { Router, RouterModule} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
	templateUrl: './clickable.parent.component.html',
})
export class ClickableParentComponent implements ICellRendererAngularComp{
    public params: any;
    public cell: any;

	constructor(private http: HttpClient){}
	
    agInit(params: any): void {
        this.params = params;
        this.cell = {row: params.value, col: params.colDef.headerName};
    }
     refresh(): boolean {
        return true;
    }
    onDelete(param){
    	this.http.delete('api/blog/'+param.id).subscribe((a)=>{document.location.reload(false);});	
    }
}