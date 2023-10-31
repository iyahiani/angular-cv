import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {HomeComponent} from './home/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent
  },
  { path: 'create', component: CreateUserComponent },
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
