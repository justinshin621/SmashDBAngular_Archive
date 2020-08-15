import {Component, Input, OnInit} from '@angular/core';
import {LBCard} from "../_models/lbcard";
import {AuthService} from "../_services/auth.service";
import {FighterIcon} from "../_models/fightericon";

@Component({
  selector: 'app-lbcard',
  templateUrl: './lbcard.component.html',
  styleUrls: ['./lbcard.component.css']
})
export class LBCardComponent implements OnInit {

  @Input() LBCard: LBCard;

  initials: string;

  mode = 'determinate';

  avatar: FighterIcon

  avggsp = 0;

  topgsp = 0;

  color = '#'

  letters = '0123456789ABCDEF';

  isElite: boolean

  constructor() { }

  ngOnInit() {

    this.avggsp = this.LBCard.avggsp;
    this.topgsp = this.LBCard.topgsp;
    this.initials = this.LBCard.first[0] + this.LBCard.last[0];
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    this.avatar = this.getIcon();
    this.isElite = this.LBCard.isElite;
  }

  isUser() {
    return false;
  }

  getIcon() {
    if (this.LBCard.favorite == 'Kirby') {
      return FighterIcon.Kirby
    }
    else if (this.LBCard.favorite == 'Fox') {
      return FighterIcon.Fox
    }
    else if (this.LBCard.favorite == 'Marth') {
      return FighterIcon.Marth
    }
    else if (this.LBCard.favorite == 'Falco') {
      return FighterIcon.Falco
    }
    else if (this.LBCard.favorite == 'Mario') {
      return FighterIcon.Mario
    }
    else if (this.LBCard.favorite == 'Pikachu') {
      return FighterIcon.Pikachu
    }
    else if (this.LBCard.favorite == 'Captain Falcon') {
      return FighterIcon.CFalcon
    }
    else if (this.LBCard.favorite == 'Ganondorf') {
      return FighterIcon.Ganon
    }
    else if (this.LBCard.favorite == 'Cloud') {
      return FighterIcon.Cloud
    }
    else if (this.LBCard.favorite == 'Luigi') {
      return FighterIcon.Luigi
    }
    else if (this.LBCard.favorite == 'Meta Knight') {
      return FighterIcon.MKnight
    }
    else if (this.LBCard.favorite == 'Peach') {
      return FighterIcon.Peach
    }
    else if (this.LBCard.favorite == 'Roy') {
      return FighterIcon.Roy
    }
    else if (this.LBCard.favorite == 'Yoshi') {
      return FighterIcon.Yoshi
    }
    else if (this.LBCard.favorite == 'Pichu') {
      return FighterIcon.Pichu
    }
    else {
      return FighterIcon.None
    }
  }


}
