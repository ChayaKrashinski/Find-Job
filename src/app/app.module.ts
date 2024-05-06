import { NgModule } from '@angular/core'
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { JobComponent } from './components/job/job.component'
import { JobsListComponent } from './components/jobs-list/jobs-list.component'
import { JobDetailsComponent } from './components/job-details/job-details.component'
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { routes } from './app.routes'
import { Router } from '@angular/router'
import { UsersServisce } from './services/users.service'
import { JobsServisce } from './services/jobs.service'

@NgModule({
    imports: [

        BrowserModule,
        RouterModule.forRoot(routes, {useHash:true}),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        Router,
        UsersServisce,

    //   NgModule,
    //    NgForm,
    //     NgModel,
    //     ReactiveFormsModule,
        CommonModule
    ],
    providers:[provideClientHydration()],
    declarations: [AppComponent, HomeComponent, LoginComponent, JobComponent, JobsListComponent, JobDetailsComponent, ],
    bootstrap: [AppComponent]
})

export class AppModule { }