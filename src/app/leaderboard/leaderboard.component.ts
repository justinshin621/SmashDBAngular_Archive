import { Component, OnInit } from '@angular/core';
import {LBCard} from "../_models/lbcard";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  LBCards: LBCard[] = [{username: 'jshin', rank: 1, first: 'justin',
  last: 'shin', avggsp: 5000000, favorite: 'Mario', topgsp: 6000000, isElite: true},
    {username: 'eshin', rank: 2, first: 'ellen',
    last: 'shin', avggsp: 6000000, favorite: 'Marth', topgsp: 7000000, isElite: true},
    {username: 'ashin', rank: 1, first: 'andy',
      last: 'shin', avggsp: 7000000, favorite: 'Fox', topgsp: 7000000, isElite: false},
    {username: 'alee', rank: 4, first: 'aaron',
      last: 'lee', avggsp: 7000000, favorite: '', topgsp: 7000000, isElite: false}
  ];

  constructor() { }

  ngOnInit() {
    this.loadAllCards();
  }

  private loadAllCards() {

  }

  private compare(a, b) {
    return b.avggsp - a.avggsp;
  }
}
