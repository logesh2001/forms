import { Component } from '@angular/core';
import { AppendService } from './append.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service';
  
  data:any;

  constructor(private append:AppendService)
  {}
  updateData(): void {
    const newData = 'hello';
    this.append.setData(newData);
    this.data= this.append.getData();
 
  }
}







 


