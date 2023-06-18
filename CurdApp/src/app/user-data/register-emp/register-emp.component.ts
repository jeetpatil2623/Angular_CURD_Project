import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDetail } from 'src/app/demo/RegisterDetail';
import { MyUrlService } from 'src/app/services/my-url.service';

@Component({
  selector: 'app-register-emp',
  templateUrl: './register-emp.component.html',
  styleUrls: ['./register-emp.component.css']
})
export class RegisterEmpComponent {

  // In this TS file in have use HttpClient for connection with Spring boot
  // This code is for Post data in database ie. Register Employee

  constructor(private http:HttpClient, private url:MyUrlService){}
  obj:RegisterDetail=new RegisterDetail();

  Register(){
    console.log(this.obj); 
    this.http.post(this.url.geturl()+'/register/registerEmployee',this.obj).subscribe(
    (data:any)=>
    {
      if(data){
       window.alert("Register Done");
      }
      else{
        window.alert("Not Register");
      }
    }
    );
  }
}
