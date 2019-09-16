import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {BlogComponent} from './blog.component';
import {ListComponent} from './list.component';
import {AgGridModule} from 'ag-grid-angular';
import {HttpClientModule} from '@angular/common/http';
import {ClickableParentComponent} from "./clickable.parent.component";
import {CookieService} from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng6-toastr/ng2-toastr';
import {NgxSpinnerModule} from "ngx-spinner";

const appRoutes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: ListComponent},
    {path: 'blog', component: BlogComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        BlogComponent,
        ListComponent,
        ClickableParentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ToastModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        HttpClientModule,
        AgGridModule.withComponents([ClickableParentComponent]),
        NgxSpinnerModule
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
