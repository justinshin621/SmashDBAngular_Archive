import {Component, Input, OnInit} from '@angular/core';
import {LBCard} from "../_models/lbcard";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-lbcard',
  templateUrl: './lbcard.component.html',
  styleUrls: ['./lbcard.component.css']
})
export class LBCardComponent implements OnInit {

  @Input() LBCard: LBCard;

  initials: string;

  mode = 'determinate';

  bufferValue = 0;

  username = '';

  calprogressvalue = 0;

  minprogressvalue = 0;

  color = '#'
  letters = '0123456789ABCDEF';

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.initials = this.LBCard.first[0] + this.LBCard.last[0];
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }

  isUser() {
    return this.LBCard.username === this.auth.currentUserValue.username;
  }


}
