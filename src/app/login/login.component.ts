import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthentService } from '../services/authent.service';
import { User } from '../model/user';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // @ts-ignore
  user: User = {};
  url = environment.api;
  constructor(private authentService: AuthentService) {}
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  // tslint:disable-next-line:typedef
  getUser() {
    // @ts-ignore
    this.user.email = this.loginForm.get('email')?.value;
    this.user.password = this.loginForm.get('password')?.value;
    this.authentService.login(this.url, this.user).subscribe((data) => {
      console.log(data);
    });
  }
}
