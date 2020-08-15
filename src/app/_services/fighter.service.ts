import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {HttpClient} from "@angular/common/http";
import {Fighter} from "../_models/fighter";

@Injectable({ providedIn: 'root' })
export class FighterService {
  constructor(private notif: NotificationService, private http: HttpClient) {}


  submit(record: any) {
    return this.http.post(`http://localhost:3030/fighter/submit`, record);
  }
}
