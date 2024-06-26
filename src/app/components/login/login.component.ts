import { NgForm, NgModel } from '@angular/forms';
import { User } from '../../models/user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { NgModule } from '@angular/core'
import path from 'path';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';
import { JobsListComponent } from '../jobs-list/jobs-list.component';
import { UsersServisce } from '../../services/users.service';
import { Profession } from '../../models/profession';
import { JobsServisce } from '../../services/jobs.service';
import { Job } from '../../models/job';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, RouterLink, RouterLinkActive, JobsListComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  ngOnInit(){
    this.user = { name: "", password: "" };
  }
  constructor(private r: Router, private userService: UsersServisce, private jobsServices:JobsServisce) { }

  user = { name: "", password: "" };
  loginClick() {
    if (this.user.password.trim().length < 8)
      alert('the password not contain spaces')
    else {
      const res = this.userService.FindUser(this.user.name, this.user.password);
      if (res) {

        localStorage.setItem('user', JSON.stringify({name:res.name, profession:res.profession}))
        localStorage.setItem("name", JSON.stringify(res.name));
        localStorage.setItem("resumesCount", '0')
        localStorage.setItem('profession', Profession[res.profession])
        this.r.navigate(['/jobsPage']);
      }
      else
        alert("the user dont found")
    }

  }
}
