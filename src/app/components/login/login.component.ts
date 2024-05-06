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


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, RouterLink, RouterLinkActive, JobsListComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private r: Router, private userService: UsersServisce) { }

  user = { name: "", password: "" };

  loginClick() {
    if (this.user.password.trim().length < 8)
      alert('the password not contain spaces')
    else {
      const res = this.userService.FindUser(this.user);

      if (res) {
        localStorage.setItem("userName", JSON.stringify(res.name));
        localStorage.setItem("resumesCount", '0')
        localStorage.setItem('profession', Profession[res.proffession])
        this.r.navigate(['/jobsPage', {myProfession:res.proffession}]);
      }
      else
        alert("the user dont found")
    }

  }
}
