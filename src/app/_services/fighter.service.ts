import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class FighterService {
  constructor(private notif: NotificationService, private http: HttpClient) {}


  submit(record) {
    return this.http.post(`http://localhost:3030/fighter/submit`, record);
  }

  edit(values, username) {
    return this.http.post(`http://localhost:3030/fighter/edit/` + username, values);
  }

}
