import { Component, OnInit} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Response} from '@angular/http';
import { BlogItem} from './blogItem';
import { Observable} from 'rxjs/Rx'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
  
@Component({
    templateUrl: './blog.component.html',
  	styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{ 

	blogForm = new FormGroup({
		id: new FormControl(''),
		image: new FormControl(''),
    	title: new FormControl(''),
    	category: new FormControl(''),
    	description: new FormControl(''),
  	});
 	id:number;
	url: string;
	
    constructor(private http: HttpClient,private router: Router,private activeRoute: ActivatedRoute){}
      
    ngOnInit(){
    	this.id = this.activeRoute.snapshot.queryParams["id"];
    	if(this.id){
    		this.http.get('api/blog/'+this.id).subscribe((val)=>this.blogForm.setValue(val));
    	}else{
    		this.blogForm.setValue(<BlogItem>{});
    	}
    }
    getImageUrl(){
    	if(this.url){
    		return this.url;
    	}
		return 'api/image/'+this.blogForm.value.id; 
	}
	onSelectFile(event) { 
   		 if (event.target.files && event.target.files[0]) {
     		let dataUrlreader = new FileReader();
     		console.log('file: '+event.target.files[0]);
      		dataUrlreader.readAsDataURL(event.target.files[0]); // read file as data url
     		dataUrlreader.onload = (event) => { // called once readAsDataURL is completed
       			this.url = dataUrlreader.result;
       			this.blogForm.patchValue({image:dataUrlreader.result.substr(dataUrlreader.result.indexOf(',') + 1)})
     		}
    }
}
 	 onSubmit(){
        if (this.id){
        		this.http.put('api/blog/',this.blogForm.value)
        		.map((res: Response) => res) 
        		.catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        		.subscribe();
        }else{
        		this.http.post('api/blog/',this.blogForm.value)
        		.map((res: Response) => res) 
        		.catch((error: any) => Observable.throw(error.json().error || 'Server error'))
        		.subscribe((r)=>{this.blogForm.patchValue({id:r});});
        }
        
    }
}