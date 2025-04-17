import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthLocalDataService {
  u!: string;
  p!: string;

  constructor(
    // We can inject dependencies to use in other components througth ID framework
   
  ) {


  }

  saveLocalStorageData(u: string, p: string): void {
    try {
      // 1. Need to inspect to determinate if the user exists or is logget
        if (u !== window.localStorage.getItem(u) || window.localStorage.getItem(u)) {
          window.localStorage.setItem(u, p); // TODO("improve this letter");
        }
      // 2. If the uses with u username dosn't exists, save the new user

    } catch (e) {
      throw new Error("Something went wrong while trying to save data " + e);
    }
  }

  removeLocalStorageData(u: string): void {
    window.localStorage.removeItem(u);
  }
}
