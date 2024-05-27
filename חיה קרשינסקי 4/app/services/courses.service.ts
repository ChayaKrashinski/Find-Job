import { Injectable } from '@angular/core';
import { Course } from '../models/Course';
import { HttpClient } from '@angular/common/http';
import { Types } from '../models/Types';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  [x: string]: any;
  constructor(private http: HttpClient) {
    this.coursesList=[{courseName:'course1', dateOfBegining:new Date("10/06/2022"), hours:10, teacherName:"lea", type:Types.Laboratory}]
   }

  ngOnInit() {
    this.GetDataFromServer();
  }
  private coursesList: Course[] = []
  private registerCourses: Course[] = []

  url = "https/localhost:4074/"
  private GetDataFromServer() {
    this.http.get<Course[]>(this.url+"GetCourses").subscribe(data=>{
      if(data)
      this.coursesList = data;
    });
  }

  private FindCopurseInServer(name:string){
    this.http.post(this.url+"FindCourse", name);
  }

  GetRegisterCourses(){
    return this.registerCourses;
  }

  GetCoursesList() {
    return this.coursesList;
  }

  FindCourse(name: string | null) {
    if (name) {
      return this.coursesList.find(c => c.courseName === name);
    }
    else return null;
  }

  RegisterToCourse(c: Course) {
    this.registerCourses.push(c);
    alert("you register to course: " + c.courseName)
  }

  DeleteRegister(c:Course){
    this.registerCourses.splice(this.registerCourses.indexOf(c));
  }

  DeleteAllCourses(){
    this.registerCourses = [];
  }

  AddNewCourse(c: Course) {
    this.coursesList.push(c);

    alert("the course " + c.courseName + " has been add")
  }
}
