import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { User } from '../shared/models/User';

import { AuthResponse } from './authResponse';

import { ConnectionStrings } from '../Globals';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  deleteToken(): void {
    localStorage.removeItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('displayName');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  loginStatus(): Observable<boolean> {
    return from<Observable<boolean>>(
      new Observable(function subscribe(subscriber) {
        const isLoggedIn = setInterval(() => {
          subscriber.next(!!localStorage.getItem('token'));
        }, 500);
      })
    ).pipe(distinctUntilChanged());
  }

  getUser(): Observable<User> | null {
    if(this.isLoggedIn()) {
      var id = localStorage.getItem('id');
      if(id == null) {
        this.deleteToken();
        return null;
      }

      return this.httpClient.get<User>(ConnectionStrings.apiUrl + "Users/" + id);
    }

    return null;
  }

  authenticate(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(ConnectionStrings.apiUrl + "User/authenticate", user);
  }
}
