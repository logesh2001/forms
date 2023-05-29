import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppendService {

  data:any;
  constructor() { }


  getData(): any {
    return this.data;
  }

  setData(data: any): void {
    this.data = data;
  }
}
