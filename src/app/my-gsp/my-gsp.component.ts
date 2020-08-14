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

  fighters: Fighter[] = [{name: 'Kirby', gsp: 5000000, createdBy: this.authService.currentUserValue,
    createdDate: new Date(Date.now()), isFavorite: true, isElite: false},
    {name: 'Fox', gsp: 6000000, createdBy: this.authService.currentUserValue,
      createdDate: new Date(Date.now()), isFavorite: false, isElite: true},
    {name: 'Marth', gsp: 7000000, createdBy: this.authService.currentUserValue,
      createdDate: new Date(Date.now()), isFavorite: true, isElite: true}];

  constructor(private userService: UserService,
              private notifService: NotificationService,
              private authService: AuthService) { }

  ngOnInit() {
    this.loadAllFighters();
  }

  loadAllFighters() {

  }

  loadUserFighters() {

  }

  deleteFighter(date) {

  }

}
