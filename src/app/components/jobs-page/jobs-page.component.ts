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
import { JobsListComponent } from '../jobs-list/jobs-list.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jobs-page',
  standalone: true,
  imports: [JobsListComponent, CommonModule, JobComponent, FormsModule, RouterLink, RouterOutlet, RouterLink, RouterLinkActive, JobDetailsComponent],
  templateUrl: './jobs-page.component.html',
  styleUrl: './jobs-page.component.scss'
})

export class JobsPageComponent {

  professions = [Profession[0], Profession[1], Profession[2], Profession[3], Profession[4]]
  profession: number | null = null
  area = '-'
  jobsList: Job[] | null = []
  messege = ''


  ngOnInit() {
    if (this.GetProfession() == null || this.GetProfession() == undefined)
      this.r.navigate(['/login'])

    this.profession = this.GetProfession();
    this.jobsList = this.jobsServisce.getAllJobs();

    //
    if (this.profession)
      this.jobsList = this.jobsServisce.orderByProf(this.profession)

    // this.activedRouter.paramMap.subscribe(params=>{
    //   let p = params.get('profession')
    //   if(p!=null)
    //     this.jobsList = this.jobsServisce.orderByProf(p);
    // })
  }

  // constructor(private jobsServisce: JobsServisce, private r:Router, private activedRouter:ActivatedRoute) {
  constructor(private jobsServisce: JobsServisce, private r: Router) {
  }

  GetProfession() {
    return parseInt(localStorage.getItem('profession') + '');
  }

  orderByProf() {
    this.messege = '🔍'
    setTimeout((() => {
      this.jobsList = this.jobsServisce.orderByProf(Profession[this.profession!]!)
      this.messege = ''
      if (this.jobsList == null)
        this.messege = 'sorry, but there arent jobs by this filter'
    }), 1000)


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
