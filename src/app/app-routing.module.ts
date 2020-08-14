import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_services/auth-guard.service';
import {RegisterComponent} from "./register/register.component";
import {MyGSPComponent} from "./my-gsp/my-gsp.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";
import {EditComponent} from "./edit/edit.component";
import {Fighter} from "./_models/fighter";


const routes: Routes = [{path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}, {path: 'register', component: RegisterComponent},
  {path: 'mygsp', component: MyGSPComponent}, {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'edit', component: EditComponent}, {path: 'fighter', component: Fighter}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
