import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Course } from '../../models/Course';
import { Types } from '../../models/Types';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent implements OnInit {

  constructor(private coursesService:CoursesService){}
  courseForm!: FormGroup;
  ngOnInit() {
    this.courseForm = new FormGroup({
      courseName: new FormControl<string>('', [Validators.required]),
      hours: new FormControl<number>(0, [Validators.required]),
      type: new FormControl<Types>(0, [Validators.required]),
      dateOfBegining: new FormControl<Date>(new Date("10/06/2022"), [Validators.required]),
      teacherName: new FormControl<string>('', [Validators.required]),
    })
  }

  getTypes() {
    return [Types[0], Types[1], Types[2]];
  }

  @Output()
  saveNewCourse:EventEmitter<Course>=new EventEmitter<Course>();

  addCourse() {
    if (this.courseForm?.valid) {
      this.saveNewCourse.emit(this.courseForm.value);
      this.courseForm.reset();
    }
    else
      alert('error input')
  }
}
