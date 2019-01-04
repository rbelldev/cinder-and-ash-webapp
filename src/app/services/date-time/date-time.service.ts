import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() {
  }

  getTime(): number {
    return new Date().getTime();
  }
}
