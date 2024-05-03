import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path:'login', component: LoginComponent}
];
