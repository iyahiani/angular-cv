import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });
  // tslint:disable-next-line:typedef
  onFormSubmit() {
    // @ts-ignore
    console.log('Name:' + this.loginForm.get('login')?.value);
    console.log('Name:' + this.loginForm.get('password')?.value);
  }
}
