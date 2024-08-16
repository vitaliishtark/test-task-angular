import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  readonly project = new BehaviorSubject<boolean>(true);
  constructor() { }

  get project$() {
    return this.project.asObservable();
  }

  showHideMenu(){
    this.project.next(!this.project.value);
  }

}
