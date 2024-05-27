import { Component } from '@angular/core';
import { Course } from '../../models/Course';
import { Types } from '../../models/Types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
  ngOnInit(){
    this.allCourses  =
    [
      {
        courseName: 'baking',
        hours: 50,
        type: Types.frontal,
        dateOfBegining: new Date("05/07/2024"),
        teacherName: 'Lea Levi'
      },
      {
        courseName: 'social_skill',
        hours: 150,
        type: Types.computerized,
        dateOfBegining: new Date("10/12/2023"),
        teacherName: 'Sara Levin'
      },
      {
        courseName: 'craftsmanship',
        hours: 55,
        type: Types.Laboratory,
        dateOfBegining: new Date("10/11/2024"),
        teacherName: 'Shoshi Vais'
      },
      {
        courseName: 'jewelry',
        hours: 65,
        type: Types.computerized,
        dateOfBegining: new Date("02/08/2024"),
        teacherName: 'Rut Lebel'
      },
      {
        courseName: 'cooking',
        hours: 25,
        type: Types.Laboratory,
        dateOfBegining: new Date("01/01/2025"),
        teacherName: 'Chani Dor'
      }
    ];

  }
  allCourses: Course[] =[]

  Iregister: Course[] = [];

  updateRegister($event: any){
    if($event.isRegister==true)
      this.Iregister.push($event.course);
    else
      this.Iregister.splice($event.course);
    alert("the register perfected")
  }



  getTodayDate(){
    return  new Date(Date.now())
  }

  getTypes(){
    return Types;
  }
  cencelAllCourses() {
    this.Iregister = [];
  }

  addNewCourse($event:any){
    this.allCourses.push($event)
}
}
