import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FighterIcon} from "../_models/fightericon";
import {Fighter} from "../_models/fighter";

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.css']
})
export class FighterComponent implements OnInit {
  @Input() fighter: Fighter;
  @Output() deleteEvent = new EventEmitter<Date>()

  username = 'user';

  gsp: number;

  avatar = FighterIcon.Fox;

  date: string;

  star = FighterIcon.star;

  isFavorite = true;

  isElite = true;

  constructor() { }

  delete(date) {
    this.deleteEvent.emit(date);
  }

  ngOnInit() {
    this.gsp = this.fighter.gsp
    this.date = this.fighter.createdDate.toDateString()
    this.username = this.fighter.createdBy.username
    this.avatar = this.getIcon();
    this.isElite = this.fighter.isElite;
    this.isFavorite = this.fighter.isFavorite;
  }

  getIcon() {
    if (this.fighter.name == 'Kirby') {
      return FighterIcon.Kirby
    }
    else if (this.fighter.name == 'Fox') {
      return FighterIcon.Fox
    }
    else if (this.fighter.name == 'Marth') {
      return FighterIcon.Marth
    }
    else if (this.fighter.name == 'Falco') {
      return FighterIcon.Falco
    }
    else if (this.fighter.name == 'Mario') {
      return FighterIcon.Mario
    }
    else if (this.fighter.name == 'Pikachu') {
      return FighterIcon.Pikachu
    }
    else if (this.fighter.name == 'Captain Falcon') {
      return FighterIcon.CFalcon
    }
    else if (this.fighter.name == 'Ganondorf') {
      return FighterIcon.Ganon
    }
    else if (this.fighter.name == 'Cloud') {
      return FighterIcon.Cloud
    }
    else if (this.fighter.name == 'Luigi') {
      return FighterIcon.Luigi
    }
    else if (this.fighter.name == 'Meta Knight') {
      return FighterIcon.MKnight
    }
    else if (this.fighter.name == 'Peach') {
      return FighterIcon.Peach
    }
    else if (this.fighter.name == 'Roy') {
      return FighterIcon.Roy
    }
    else if (this.fighter.name == 'Yoshi') {
      return FighterIcon.Yoshi
    }
    else if (this.fighter.name == 'Pichu') {
      return FighterIcon.Pichu
    }
    else {
      return FighterIcon.None
    }
  }



}
