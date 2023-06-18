import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmpComponent } from './register-emp/register-emp.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditEmpComponent } from './edit-emp/edit-emp.component';


@NgModule({
  declarations: [
    RegisterEmpComponent,
    ShowEmployeesComponent,
    EditEmpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:
  [
    RegisterEmpComponent,
    ShowEmployeesComponent,
    EditEmpComponent
  ]
})
export class UserDataModule { }
