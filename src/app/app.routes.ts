import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobsPageComponent } from './components/jobs-page/jobs-page.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path:'login', component: LoginComponent},
    {path:'jobsList', component: JobsListComponent},
    {path:'jobDetails', component: JobDetailsComponent},
    {path:'jobsPage', component:JobsPageComponent}
];
