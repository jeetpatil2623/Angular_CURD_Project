import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurdApp';

  // This is code for changing the template to display registere component or Show component
  //Here we change the value of what to show for particular component
  WhatToShow=0;
  show(num:number){
    this.WhatToShow=num;
    console.log(num);
  }
}
