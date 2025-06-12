import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  darkModeValue = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeValue.asObservable();

  setDarkMode(value: boolean){
    this.darkModeValue.next(value);
  }
  constructor() { }
}
