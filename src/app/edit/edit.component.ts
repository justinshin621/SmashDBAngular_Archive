import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NotificationService} from "../_services/notification.service";
import {AuthService} from "../_services/auth.service";
import {FighterIcon} from "../_models/fightericon";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  gsp = 0;

  fighter = '';

  avatar: FighterIcon;

  favorite: boolean;

  hasMain: boolean;

  formatLabel(value: number) {
    if (value >= 1000000) {
      return (Math.round(value / 100000)/ 10) + 'm';
    }

    return value;
  }

  constructor(private route: ActivatedRoute,
              private notifService: NotificationService,
              private auth: AuthService) { }

  ngOnInit() {

    this.fighter = 'Captain Falcon';
    this.gsp = 5000000;
    this.favorite = false;
    this.avatar = this.getIcon();
    this.hasMain = false;

    /*this.route.params.subscribe(params => {
      this.gsp = params['gsp'];
      this.fighter = params['fighter']
      this.favorite = params['favorite'];
    });*/
  }

  editCard() {

  }

  getIcon() {
    if (this.fighter == 'Kirby') {
      return FighterIcon.Kirby
    }
    else if (this.fighter == 'Fox') {
      return FighterIcon.Fox
    }
    else if (this.fighter == 'Marth') {
      return FighterIcon.Marth
    }
    else if (this.fighter == 'Falco') {
      return FighterIcon.Falco
    }
    else if (this.fighter == 'Mario') {
      return FighterIcon.Mario
    }
    else if (this.fighter == 'Pikachu') {
      return FighterIcon.Pikachu
    }
    else if (this.fighter == 'Captain Falcon') {
      return FighterIcon.CFalcon
    }
    else if (this.fighter == 'Ganondorf') {
      return FighterIcon.Ganon
    }
    else if (this.fighter == 'Cloud') {
      return FighterIcon.Cloud
    }
    else if (this.fighter == 'Luigi') {
      return FighterIcon.Luigi
    }
    else if (this.fighter == 'Meta Knight') {
      return FighterIcon.MKnight
    }
    else if (this.fighter == 'Peach') {
      return FighterIcon.Peach
    }
    else if (this.fighter == 'Roy') {
      return FighterIcon.Roy
    }
    else if (this.fighter == 'Yoshi') {
      return FighterIcon.Yoshi
    }
    else if (this.fighter == 'Pichu') {
      return FighterIcon.Pichu
    }
    else {
      return FighterIcon.None
    }
  }

}
