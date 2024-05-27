import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models/Course';
import { Types } from '../../models/Types';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
    @Input()
    data:Course | null =null;

    isRegister:boolean=false;

    @Output() register:EventEmitter<any> = new EventEmitter<any>();
    
    getCoursesTopic(){
        return Types;
    }

    getTodayDate(){
        return  new Date(Date.now())
      }

    updateRegister(){
      alert("register to "+this.data?.courseName)
        this.isRegister=!this.isRegister;
        this.register.emit({course:this.data,isRegister:this.isRegister});
    }
}


