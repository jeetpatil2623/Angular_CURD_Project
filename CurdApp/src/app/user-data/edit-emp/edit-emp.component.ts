import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { RegisterDetail } from 'src/app/demo/RegisterDetail';
import { MyUrlService } from 'src/app/services/my-url.service';


@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {

  // In this TS file in have use HttpClient for connection with Spring boot.
  //This is code for Put data in Database , In first i get ther data then update the data of particular Employee.

  constructor(private http:HttpClient, private url:MyUrlService,private app:AppComponent){
    this.http.get(this.url.geturl()+'/register/getEmployeeInfo'+this.url.editEmpId).subscribe(
      (data:any)=>
      {
        this.obj=data;
      }
    );
  }
  obj:RegisterDetail=new RegisterDetail();

  //Here I have created save method for save updated record in database and UI.

  Save()
  {
    console.log(this.url.editEmpId);
    console.log(this.obj);
    this.obj.id=this.url.editEmpId;
    this.http.put(this.url.geturl()+'/register/save',this.obj).subscribe(
    (data:any)=>
    {
      if(data){
       window.alert("Employees Details Updated");
       this.app.WhatToShow=2;
      }
      else{
        window.alert("Not Updated");
      }
    }
    )

  }
  // This method for if user not to update the employee details.
  Cancel()
  {
    this.app.WhatToShow=2;
  }

}
