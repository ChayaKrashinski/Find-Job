import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import { Job } from '../models/job';
import { Profession } from '../models/profession';

@Injectable({
  providedIn: 'root'
})
export class JobsServisce {
  
  constructor(private http: HttpClient) {
    this.getAllJobsFromServer();
  }

  jobsList: Job[] = [{ area: "north", fromHome: true, name: "job1", profession: Profession.electric, range: 4, requierment: "" }, { area: "south", fromHome: false, name: "job2", profession: Profession.admins, range: 14, requierment: "" }]
  jobsResumeSend: Job[] = [{ area: "north", fromHome: true, name: "job1", profession: Profession.electric, range: 4, requierment: "" }]

  // jobsList:Job[]=[]
  // jobsResumeSend:Job[]=[]

  getAllJobsFromServer() {
    // this.http.get('https://localhost:44337/api/GetJobs').subscribe((res: any) =>
    // this.jobsList = res
    // ) 
  }

  addJob(jobData: Job) {
    this.jobsResumeSend.push(jobData)
  }

  public get JobsList() {
    return this.jobsList;
  }

  getProfessions() {
    return [Profession[0], Profession[1], Profession[2], Profession[3], Profession[0]]
  }

  getJobsListByProfession(profession: Profession | null | string) {
    if (profession)
      return this.jobsList.filter(j => j.profession == profession!)
    else return null;
  }
  orderByProf(p: Profession | null| string |any) {
    if (p) return this.jobsList!.filter(j => j.profession == p||j.profession.valueOf()==p)
    else return null
  }
  orderByArea(a: string | null) {
    if (a) return this.jobsList!.filter(j => j.area == a)
    else return null
  }
  getAllJobs() { return this.jobsList }
}
