import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/Course';
import { Types } from '../../models/Types';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  constructor(private coursesService: CoursesService) {

  }

  registerList: Course[] = []

  allCourses: Course[] = []

  isRegister: any[] = []

  ngOnInit() {
    this.allCourses = this.coursesService.GetCoursesList();
    this.registerList = this.coursesService.GetRegisterCourses();
    this.allCourses.forEach(c => {
      this.isRegister.push({ course: c, isRegister: this.registerList.includes(c) });
    })
  }

  updateRegister($event: any) {
    if ($event.isRegister == true)
      this.coursesService.RegisterToCourse($event.course);
    else
      this.coursesService.DeleteRegister($event.course);
  }

  getTodayDate() {
    return new Date(Date.now())
  }

  getTypes() {
    return Types;
  }
  cencelAllCourses() {
    this.coursesService.DeleteAllCourses();
  }

  saveNewCourse($event: Course) {
    this.coursesService.AddNewCourse($event);
    this.ngOnInit()
  }

  findCourse: any;
  findDate() {
    this.findCourse = document.getElementById('findCourse');

    alert("date: " + this.coursesService.FindCourse(this.findCourse.value)?.dateOfBegining)
  }

}
