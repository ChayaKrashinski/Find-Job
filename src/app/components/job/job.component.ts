import { Component, Input, numberAttribute, booleanAttribute } from '@angular/core';
import { Job } from '../../models/job';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { JobsServisce } from '../../services/jobs.service';
import { JobDetailsComponent } from '../job-details/job-details.component';


@Component({
  selector: 'app-job',
  standalone: true,
  imports: [JobDetailsComponent, CommonModule, RouterLink, RouterLinkActive, RouterOutlet, JobDetailsComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  ngOnInit() {
  }

  @Input() jobData: Job | null = null;
  constructor(private r: Router, private jobsServisce: JobsServisce) { }

  sendResume() {

    let cr: Number = parseInt(localStorage.getItem("resumeCount") + '')
    if (typeof cr == 'number')
      cr = cr + 1
    else cr = 1
    localStorage.setItem("resumeCount", JSON.stringify(cr));
    if (this.jobData)
      this.jobsServisce.addJob(this.jobData);
    alert('the resume has been sent successfully')
  }


}
