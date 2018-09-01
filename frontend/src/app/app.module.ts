import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogComponent }   from './blog.component';
import { ListComponent }   from './list.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes =[
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: ListComponent},
    { path: 'blog', component: BlogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent,BlogComponent,ListComponent]
})
export class AppModule { }
