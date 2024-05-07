import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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
import { OnInit } from '@angular/core';
import { Router } from 'express';
@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [JobsListComponent, CommonModule, JobComponent, FormsModule, RouterLink, RouterOutlet, RouterLink, RouterLinkActive, JobDetailsComponent],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss'
})
export class JobsPageComponent {
  professions = [Profession[0], Profession[1], Profession[2], Profession[3], Profession[4]]
  profession: Profession | null = null
  area = '-'
  // p:User=JSON.parse(localStorage.getItem("user")+'')
  jobsList: Job[] | null = []
  messege = ''


  ngOnInit() {
    this.jobsList = this.jobsServisce.getAllJobs();
    this.activedRouter.paramMap.subscribe(params=>{
      let p = params.get('profession')
      if(p!=null)
        this.jobsList = this.jobsServisce.orderByProf(p);
    })
  }
  constructor(private jobsServisce: JobsServisce, private r:Router, private activedRouter:ActivatedRoute) {
    this.profession = this.GetUser().profession;
  }

  orderByProf() {
    this.messege = '🔍'
    setTimeout((() => {
      this.jobsList = this.jobsServisce.orderByProf(this.profession)
      this.messege = ''
      if (this.jobsList == null)
        this.messege = 'sorry, but there arent jobs by this filter'
    }), 1000)


  }
  GetUser() {
    return JSON.parse(localStorage.getItem('user') + '')
  }
  orderByArea() {
    this.messege = '🔍'
    setTimeout((() => {
      this.jobsList = this.jobsServisce.orderByArea(this.area)
      this.messege = ''
      if (this.jobsList == null)
        this.messege = 'sorry, but there arent jobs by this filter'
    }), 1000)

  }


}
