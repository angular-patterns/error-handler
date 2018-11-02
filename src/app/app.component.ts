import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app7';
  constructor(private http: HttpClient){

  }
  throwError() {
    throw new Error("Something went wrong");
  }
  httpError() {
    this.http.get('blahblah').subscribe();
  }
}
