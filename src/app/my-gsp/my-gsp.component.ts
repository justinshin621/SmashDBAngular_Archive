import { Component, OnInit } from '@angular/core';
import {Fighter} from "../_models/fighter";
import {UserService} from "../_services/user.service";
import {NotificationService} from "../_services/notification.service";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-my-gsp',
  templateUrl: './my-gsp.component.html',
  styleUrls: ['./my-gsp.component.css']
})
export class MyGSPComponent implements OnInit {

  fighters: Fighter[] = [];

  constructor(private userService: UserService,
              private notifService: NotificationService) { }

  ngOnInit() {
  }

}
