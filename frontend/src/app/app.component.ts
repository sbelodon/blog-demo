import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {Guid} from 'guid-typescript';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    userIdCookieName = 'userId';

    constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
        if (!this.cookieService.check(this.userIdCookieName)) {
            this.cookieService.set(this.userIdCookieName, Guid.create().toString(), new Date(9000, 11, 30));
        }
    }

    getUserId() {
        return this.cookieService.get(this.userIdCookieName);
    }
}
