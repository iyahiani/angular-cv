import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthentService} from '../services/authent.service';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // @ts-ignore
  user: User ;
  url = '/api/auth';
  constructor(private authentService: AuthentService) {
  }
  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });
  // tslint:disable-next-line:typedef
  onFormSubmit() {
    this.user.name = this.loginForm.get('login')?.value;
    this.user.password = this.loginForm.get('password')?.value;
    this.authentService.authent(this.url, this.user).subscribe(data  => {
      console.log(data);
    });
  }
}
