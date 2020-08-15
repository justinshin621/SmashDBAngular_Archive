import {Component, OnDestroy, OnInit, Output} from '@angular/core';

import {UserService} from '../_services/user.service';
import {NotificationService} from '../_services/notification.service';
import {FighterService} from "../_services/fighter.service";
import {Fighter} from "../_models/fighter";
import {User} from "../_models/user";
import {AuthService} from "../_services/auth.service";


@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']},
  )

  export class HomeComponent implements OnInit {
  characters: string[] = ['Fox', 'Cloud', 'Pikachu', 'Mario', 'Luigi', 'Marth', 'Roy', 'Falco', 'Meta Knight', 'Peach',
    'Pichu', 'Captain Falcon', 'Ganondorf', 'Yoshi', 'Kirby'];
  GSP: number;
  fighter = 'Fox';



  constructor(
    private userService: UserService,
    private fighterService: FighterService,
    private notifService: NotificationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }


  submit() {
    const record = {
      name: this.fighter,
      gsp: this.GSP,
      isFavorite: false,
      isElite: false
    };
    console.log(this.authService.currentUserValue._id);
    this.fighterService.submit(record).subscribe(() => {
      console.log('here');
      this.notifService.showNotif('Fighter GSP recorded!', 'confirmation');
    },
      error => {
        this.notifService.showNotif('problem submitting', 'error');
      });

  }
}

