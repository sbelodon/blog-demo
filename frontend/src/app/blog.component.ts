import { Component, OnInit} from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Response} from '@angular/http';
import { BlogItem} from './blogItem';
import { Observable} from 'rxjs/Rx'
  
@Component({
    templateUrl: './blog.component.html',
  	styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{ 
	blogItem: BlogItem;
	headers: HttpHeaders;
 
    constructor(private http: HttpClient){}
      
    ngOnInit(){
    	this.blogItem=<BlogItem>{};
    }
 	 onSubmit(form: NgForm){
        console.log(form.value);
        this.http.post('api/blog/', form.value)
        .map((res: Response) => res.json()) 
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        .subscribe();
    }
}