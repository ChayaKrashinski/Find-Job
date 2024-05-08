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
import { OnInit } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, JobsListComponent, RouterOutlet, HomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit() {
    this.user = this.GetUser()
    this.userName = localStorage.getItem('name');
    this.resumes = localStorage.getItem("resumeCount");
    this.userProfession = Profession[parseInt(localStorage.getItem('profession')!)]
  }
  
  userName: string | null = 'user'
  resumes: null | string = '0';
  user: { name: string; profession: number; }={ name: 'string', profession: 2};
  userProfession: string | null = null

  constructor(private r: Router) {
  }

  GetUser() {
    return JSON.parse(localStorage.getItem('user') + '')
  }
  GetProfession()
  {
    return this.userProfession;
  }

  jobsPage() {
    this.r.navigate(['/jobsPage']);
    // this.r.navigate(['/jobsPage', {profession=this.userProfession}]);

  }
}
