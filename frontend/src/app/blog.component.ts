import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {AppComponent} from './app.component';
import {ToastsManager} from 'ng6-toastr/ng2-toastr';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    blogForm = new FormGroup({
        id: new FormControl(''),
        image: new FormControl(''),
        title: new FormControl(''),
        category: new FormControl(''),
        description: new FormControl(''),
        version: new FormControl(''),
        userId: new FormControl('')
    });
    id: number;
    url: string;

    constructor(private http: HttpClient,
                private router: Router,
                private activeRoute: ActivatedRoute,
                private appComponent: AppComponent,
                private toastr: ToastsManager,
                private viewContainerRef: ViewContainerRef,
                private spinner: NgxSpinnerService
    ) {
        this.toastr.setRootViewContainerRef(viewContainerRef);
    }

    loadBlogItem(itemId: any) {
        this.http.get('api/blog/' + itemId).subscribe((val) => {
            this.blogForm.setValue(val);
            this.spinner.hide();
        });
    }

    ngOnInit() {
        this.spinner.show();
        this.id = this.activeRoute.snapshot.queryParams["id"];
        if (this.id) {
            this.loadBlogItem(this.id);
        } else {
            this.blogForm.patchValue({userId: this.appComponent.getUserId()});
            this.spinner.hide();
        }
    }

    getImageUrl() {
        if (this.url && this.url.length > 0) {
            return this.url;
        }

        let blogItem = this.blogForm.value;
        let id = blogItem.id;
        if(id && blogItem.image && blogItem.image.length > 0) {
            return 'api/image/' + id;
        }
        return undefined;
    }

    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            let dataUrlreader = new FileReader();
            console.log('file: ' + event.target.files[0]);
            dataUrlreader.readAsDataURL(event.target.files[0]); // read file as data url
            dataUrlreader.onload = (event) => { // called once readAsDataURL is completed
                this.url = <string>dataUrlreader.result;
                this.blogForm.patchValue({image: this.url.substr(this.url.indexOf(',') + 1)})
            }
        }
    }

    onSubmit() {
        this.spinner.show();
        if (this.id) {
            this.http.put('api/blog/', this.blogForm.value)
                .map((res: Response) => res)
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
                .subscribe((a) => {
                    this.loadBlogItem(this.id);
                    this.toastr.success('Saved!', 'Success!');
                });
        } else {
            this.http.post('api/blog/', this.blogForm.value)
                .map((res: Response) => res)
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
                .subscribe((savedId) => {
                    this.router.navigate(['/blog'], {queryParams: {'id': savedId}});
                    this.id = <any>savedId;
                    this.loadBlogItem(savedId);
                    this.toastr.success('Saved!', 'Success!');
                });
        }

    }
}