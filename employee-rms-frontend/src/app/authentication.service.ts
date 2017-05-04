import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  private getAuthenticateURL:string = 'api/auth/';

  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http:Http) { }

  login(username:string, password:string) {
    console.log('login service');
    return this.http.post(this.getAuthenticateURL, JSON.stringify({ username: username, password: password}), {headers: this.headers})
      .map(response => {
        let user = response.json();
        console.log('mapping user found',user);
        if(user) {
          console.log('user found!');
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
