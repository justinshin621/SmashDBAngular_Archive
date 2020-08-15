import { Component, OnInit } from '@angular/core';
import {Fighter} from "../_models/fighter";
import {UserService} from "../_services/user.service";
import {NotificationService} from "../_services/notification.service";
import {AuthService} from "../_services/auth.service";
import {FighterService} from "../_services/fighter.service";
import {first} from "rxjs/operators";

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
      createdDate: new Date(Date.now()), isFavorite: true, isElite: true},
    {name: 'Falco', gsp: 8000000, createdBy: this.authService.currentUserValue,
      createdDate: new Date(Date.now()), isFavorite: true, isElite: true}
  ];

  constructor(private userService: UserService,
              private notifService: NotificationService,
              private authService: AuthService,
              private fighterService: FighterService) { }

  ngOnInit() {
    this.loadAllFighters();
  }

  loadAllFighters() {
    this.fighterService.getAll().subscribe(fighters => {
      this.fighters = fighters;
      console.log(this.fighters);
    },
      error => this.notifService.showNotif(error.toString(), 'warning'));
  }

  loadUserFighters() {

  }

  deleteFighter(date) {
    this.fighterService.delete(date, this.authService.currentUserValue.username).pipe(first()).subscribe(() => {
      this.fighters = null;
      this.loadAllFighters();
      this.notifService.showNotif('Delete Fighter!', 'response');
    })
  }

}
