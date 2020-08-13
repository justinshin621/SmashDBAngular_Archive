import {Component} from '@angular/core';
import {AuthService} from './_services/auth.service';
import {Router} from '@angular/router';
import {User} from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'HW5Angular';
  currentUser: User;


  constructor(  private router: Router,
                private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isUser() {

    return this.currentUser;
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }



}
