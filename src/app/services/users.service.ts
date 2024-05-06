import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import { Job } from '../models/job';
import { User } from '../models/user';
import { Profession } from '../models/profession';

@Injectable({
  providedIn: 'root'
})

export class UsersServisce{
  constructor(private http:HttpClient) { 
  }

  usersList:User[]=[{id:123, name:"chaya", password:"abc12345", proffession:Profession.admins}, {id:159, name:"sara", password:"def456", proffession:Profession.electric}]

  getUserFromServer(user: { name: string; password: string; }){
    //send params
    // this.http.get('https://localhost:44337/api/GetUser', user).subscribe((res: any) =>
    // this.usersList = res
    // )
  }

  FindUser(user:{name:string, password:string}){
    this.getUserFromServer(user);
    return this.usersList.find(u=>u.password==user.password&&u.name==user.name);
  }

  public get UsersList(){
    return this.usersList;
  }


}
