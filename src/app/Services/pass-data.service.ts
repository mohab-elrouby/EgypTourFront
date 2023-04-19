import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {

  private dataSource = new BehaviorSubject<any>("default message");
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: any) {
    this.dataSource.next(data);
  }
}