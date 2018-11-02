import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {

  constructor() { }

  next(error: any) {
    alert(error.message);
  }
}
