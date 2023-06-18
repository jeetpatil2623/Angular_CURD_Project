import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyUrlService } from 'src/app/services/my-url.service';
import { RegisterDetail } from 'src/app/demo/RegisterDetail';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent {

// In this TS file in have use HttpClient for connection with Spring boot
// This code for get data from database and Display to show compnents on frontend

  allEmployees:RegisterDetail[]=[];
  constructor(private http:HttpClient, private url:MyUrlService,private app:AppComponent)
  {
    this.http.get(this.url.geturl()+'/register/GetEmployees').subscribe(
      (data:any)=>{
        if(data==null){
          window.alert("data no fetch");
        }
        else{
          console.log(data);
          this.allEmployees=data;
        }
      }
    );
  }

//This is logic for Delete Particular Employee Details
  deleteEmp(num:number)
  {

    if(window.confirm("Are you sure want to delete"))
    {
      console.log(num);
      this.http.delete(this.url.geturl()+'/register/delete'+num).subscribe(
        (data:any)=>{
          if(data){
            window.alert("Data Deleted success");
            //this.allEmployees.splice(num,-1);
            const index = this.allEmployees.findIndex(employee => employee.id === num);
            if (index !== -1) {
              this.allEmployees.splice(index, 1);
            }
          }
          else{
            window.alert("data not deleted by id");
          }
        }
      );
    }
    else
    {
      window.alert("Not Deleted");  
    }
  }

  //This method is used to show update form.
  edit(num :number)
  {
    this.url.editEmpId=num;
    
    this.app.WhatToShow=3;
  }


  
}
