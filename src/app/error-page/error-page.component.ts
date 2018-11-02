import { Component, OnInit, Injector, NgZone, ApplicationRef } from '@angular/core';
import { ErrorNotificationService } from 'src/error-handler/error-notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  ngOnInit() {

  }

}
