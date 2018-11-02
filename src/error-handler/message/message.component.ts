import { Component, OnInit, Injector, NgZone } from '@angular/core';
import { ErrorNotificationService } from '../error-notification.service';
import { environment } from '../../environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: '.message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message: string;
  stack: string;
  html: SafeHtml;

  customErrors: boolean = environment.customErrors;

  constructor(private injector: Injector) { 
    const e = this.injector.get(ErrorNotificationService);
    const sanitizer: DomSanitizer = this.injector.get(DomSanitizer);

    this.injector.get(NgZone).run(t=> {
      setTimeout(t=> {
        e.error$.subscribe(x => {
          this.message = x.message;
          this.stack = x.stack;
          if (x.html) {
            this.html = sanitizer.bypassSecurityTrustHtml(x.html);
          }
        });
      });
    }); 
  }
  ngOnInit() {
  }

}
