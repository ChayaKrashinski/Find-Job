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
  jobsPage() {
    this.r.navigate(['/jobsPage/'+this.user.profession]);
  }

  ngOnInit() {
    this.user = this.GetUser()
    this.userName = this.user.name;
    this.resumes = localStorage.getItem("resumeCount");
    this.userProfession = Profession[this.user.profession]
  }
  userName: string | null = 'user'
  userProfession: string | null = '-'
  resumes: null | string = '0';
  user!: { name: string; profession: number; };

  constructor(private r: Router) {

  }

  GetUser() {
    return JSON.parse(localStorage.getItem('user') + '')
  }

}
