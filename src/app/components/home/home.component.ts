import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { User } from '../../models/user';
import { LoginComponent } from '../login/login.component';
import { link } from 'fs';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, HomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // userDetails = localStorage.getItem("user");
  userDetails={id:123, password:"456", name:"chaya", profession:"computers"}
  // resumes = localStorage.getItem("resumesCounter");
  resumes = 9;
  constructor(private r: Router){}
  login = () => {
    // this.r.navigate(['/login'])
    //כאן יתרחש ניווט ללוגין
  }


}

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
 
