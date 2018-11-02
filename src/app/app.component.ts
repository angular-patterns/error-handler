import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app7';
  someVar: any;
  constructor(private http: HttpClient, private router: Router){

  }
  throwError() {
    throw new Error("Something went wrong");
  }
  httpError() {
    this.http.get('blahblah').subscribe();
  }
  nullError() {
    this.someVar.doSomething();
  }
  routingError() {
    this.router.navigate(['./some-path']);
  }
}
