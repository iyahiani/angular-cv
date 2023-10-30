import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {
  private httpOption = new HttpParams();
  constructor(private http: HttpClient) {
    this.httpOption.append('Content-Type', 'application/json');
    this.httpOption.append('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    this.httpOption.append('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  }
  public authent(api: string , user: User): Observable<any>{
    return this.http.post(api, user);
  }

}
