import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string, password: string): boolean {
      if (username == "wangweiwei") {
          return true;
      }
      return false;    
  }
}
