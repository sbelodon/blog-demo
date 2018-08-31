import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent }   from './blog.component';
import { ListComponent }   from './list.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes =[
    { path: '', component: AppComponent},
    { path: 'list', component: ListComponent},
    { path: 'blog', component: BlogComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ListComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent,BlogComponent,ListComponent]
})
export class AppModule { }
