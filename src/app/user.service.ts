import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getMessage() {
    return 'Hello   I Form User Service from Service 👋';
  }
}
