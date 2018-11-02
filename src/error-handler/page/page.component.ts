import { Component, OnInit, Injector, NgZone, ApplicationRef } from '@angular/core';
import { ErrorNotificationService } from 'src/error-handler/error-notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  ngOnInit() {

  }

}
