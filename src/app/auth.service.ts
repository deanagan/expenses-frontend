import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:57532/auth/'

  constructor(private http:HttpClient) { }

  register(user) {
    console.log("register service invoked");
    return this.http.post(this.baseUrl+'register', user);
  }

  login(user) {
    return this.http.post(this.baseUrl+'login', user);
  }

  logout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
  }

  get getUserName() {
    return localStorage.getItem('userName');
  }

  get isAuthenticated() {
    return !!localStorage.getItem('token_value');
  }
}
