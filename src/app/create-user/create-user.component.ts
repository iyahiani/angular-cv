import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {AuthentService} from '../services/authent.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  url = environment.api;
  private user: any = {};
  constructor(private authenticService: AuthentService) {
  }
  loginFormCreate = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    role: new FormControl(),
  });

  // tslint:disable-next-line:typedef
  onCreationSubmit() {
    this.user.login = this.loginFormCreate.get('login')?.value;
    this.user.password = this.loginFormCreate.get('password')?.value;
    this.user.email = this.loginFormCreate.get('email')?.value;
    this.user.roles = this.loginFormCreate.get('role')?.value;
    this.authenticService.createUser(this.url, this.user).subscribe(data  => {
      console.log(data);
    });
  }
}
