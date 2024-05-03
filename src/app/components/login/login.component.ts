import { NgForm, NgModel } from '@angular/forms';
import { User } from '../../models/user';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { NgModule } from '@angular/core'
import path from 'path';
import { Router, RouterOutlet } from '@angular/router';
import { routes } from '../../app.routes';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // constractor(private _router: Router){}
  user = { userName: "", userPassword: "" };

  loginClick = () => {
    //שליפת הפרטים מהדאטה
    //במקרה של הצלחה, ניווט לרשימת המשרות
    alert("welcome!!!!!")
  }
}
