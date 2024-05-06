import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JobComponent } from '../job/job.component';
import { Job } from '../../models/job';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { Profession } from '../../models/profession';
import { NgModule } from '@angular/core';
import { JobsServisce } from '../../services/jobs.service';
import { User } from '../../models/user';
import { JobsListComponent } from '../jobs-list/jobs-list.component';
@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [JobsListComponent, CommonModule, JobComponent, FormsModule, RouterLink, RouterOutlet, RouterLink, RouterLinkActive, JobDetailsComponent],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss'
})
export class JobsPageComponent {
  @Input()
  myProfession!: Profession;
  constructor(private jobsServisce: JobsServisce) {
    this.jobsList = this.jobsServisce.getJobsListByProfession(this.myProfession);
  }
  professions = [Profession[0], Profession[1], Profession[2], Profession[3], Profession[4]]
  profession:Profession|null=null
  area = '-'
  // p:User=JSON.parse(localStorage.getItem("user")+'')
  jobsList: Job[]|null=[]
  messege = ''
  orderByProf() {
    this.messege = '🔍'
    setTimeout((()=>{
      this.jobsList = this.jobsServisce.orderByProf(this.myProfession, this.jobsList)
      this.messege = ''
      if (this.jobsList == null) 
        this.messege = 'sorry, but there arent jobs by this filter'
    }),1000 )

  }
  orderByArea() {
    this.messege = '🔍'
    setTimeout((()=>{
      this.jobsList = this.jobsServisce.orderByArea(this.area, this.jobsList)
      this.messege = ''
      if (this.jobsList == null) 
        this.messege = 'sorry, but there arent jobs by this filter'
    }),1000 )

  }


}
