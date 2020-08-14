import { Component, OnInit } from '@angular/core';
import {FighterIcon} from "../_models/fightericon";

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.css']
})
export class FighterComponent implements OnInit {

  username = 'user';

  gsp = '1,000,000';

  date = new Date(Date.now()).toDateString();

  avatar = FighterIcon.Fox;

  star = FighterIcon.star;

  isFavorite = true;

  isElite = true;

  constructor() { }

  ngOnInit() {

  }



}
