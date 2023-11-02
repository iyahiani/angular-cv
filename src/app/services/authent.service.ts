import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../model/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Token } from '../model/token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthentService {
  private httpOption = new HttpParams();
  // @ts-ignore
  private tokenSubject: BehaviorSubject<Token>;
  // public token: Observable<Token>;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.httpOption.append('Content-Type', 'application/json');
    this.httpOption.append(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    this.httpOption.append(
      'Access-Control-Allow-Methods',
      'POST, GET, PUT, DELETE, OPTIONS',
    );
  }
  httpParams = new HttpParams();
  // tslint:disable-next-line:align
  public createUser(api: string, user: User): Observable<any> {
    return this.http.post(api + '/create', user);
  }
  // tslint:disable-next-line:typedef
  public login(api: string, user: User) {
    // @ts-ignore
    return this.http.post(api + '/login', user).pipe(
      map((token) => {
        // tslint:disable-next-line:ban-types
        localStorage.setItem('user-token', JSON.stringify(token));
        // this.tokenSubject.next(token as Token);
        this.router.navigate(['/home]']);
        return token as Token;
      }),
    );
  }
  public logout() {
    localStorage.removeItem('user-token');
    // @ts-ignore
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }
}
