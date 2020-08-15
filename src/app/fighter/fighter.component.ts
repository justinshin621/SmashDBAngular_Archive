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

  }



}
