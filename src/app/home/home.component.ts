import {Component, OnDestroy, OnInit, Output} from '@angular/core';

import {UserService} from '../_services/user.service';
import {NotificationService} from '../_services/notification.service';

@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']},
  )

  export class HomeComponent implements OnInit {



  constructor(
    private userService: UserService,
    private notifService: NotificationService
  ) {}

  ngOnInit() {
  }



}

