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
import { OnInit } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [ CommonModule, JobComponent,FormsModule, RouterLink, RouterOutlet, RouterLink, RouterLinkActive, JobDetailsComponent],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.scss'
})

export class JobsListComponent {

  OnInit(){
  }

  @Input() jobsList:Job[]|null=null;

  constructor(private jobsService:JobsServisce){
  }

}
