import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(user: User): boolean {
    if (user.username === 'user' && user.password === 'password') {
      this.loggedIn = true;
      return true
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }

  constructor() { }
}
