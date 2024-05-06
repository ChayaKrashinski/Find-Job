import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { User } from '../../models/user';
import { LoginComponent } from '../login/login.component';
import { link } from 'fs';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JobsListComponent } from '../jobs-list/jobs-list.component';
import { UsersServisce } from '../../services/users.service';
import { Profession } from '../../models/profession';
import { JobsServisce } from '../../services/jobs.service';
import { privateDecrypt } from 'crypto';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, JobsListComponent, RouterOutlet, HomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userName: string | null = 'user'
  userProfession: string | null = Profession[Profession.admins]
  resumes: null | string = '0';

  // userDetails() {
  //   this.userName = localStorage.getItem('userName');
  //   this.resumes = localStorage.getItem("resumeCount");
  //   this.userProfession = localStorage.getItem('profession')
  // }
  
  

  constructor(private r: Router, private usersServices: UsersServisce, private jobsServices: JobsServisce) {
  }

}
