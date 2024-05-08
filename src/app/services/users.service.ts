import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
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
  user:User|null=null

  
  getUserFromServer(name: string,  password: string){
    try {
      let params = {name:name, password:password};
      this.http.post('https://localhost:7157/GetUser', params).subscribe((res: any) =>
      this.user = res
      )
    } catch (error) {
      alert('error 500')
    }

  }

  FindUser(_name:string, _password:string){
    this.getUserFromServer(_name, _password);
    return this.user;
  }


}
