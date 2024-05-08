import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Observer } from 'rxjs';
import { Job } from '../models/job';
import { Profession } from '../models/profession';

@Injectable({
  providedIn: 'root'
})
export class JobsServisce {

  ngOnInit(){
    this.getAllJobsFromServer();

  }
  
  constructor(private http: HttpClient) {
  }

  jobsList:Job[]=[]
  jobsResumeSend:Job[]=[]

  getAllJobsFromServer() {
    this.http.get('https://localhost:7157/GetJobs').subscribe((res: any) =>
    this.jobsList = res
    ) 
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

  getJobsListByProfession(profession: number|null) {
    if (profession)
      return this.jobsList.filter(j => Profession[j.profession] === Profession[profession])
    else return null;
  }
  orderByProf(p: number |any) {
    if ( typeof parseInt(p) === "number") return this.jobsList!.filter(j => Profession[j.profession] == Profession[p]||j.profession.valueOf()==p)
    else return null
  }
  orderByArea(a: string | null) {
    if (a) return this.jobsList!.filter(j => j.area == a)
    else return null
  }
  getAllJobs() { return this.jobsList }
}
