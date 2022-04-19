import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { DepartmentComponent } from './department/department.component';
import { DetailDepartmentComponent } from './department/detail-department/detail-department.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './employee/detail-employee/detail-employee.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: 'employee-component', 
    component: EmployeeComponent,
  children:[
    { path: 'detail-employee', component: DetailEmployeeComponent },
    { path: 'add-employee', component: AddEmployeeComponent}
  ]},
  { path: 'department-component', 
    component: DepartmentComponent,
  children:[
    {path: 'detail-department', component:  DetailDepartmentComponent },
    {path: 'add-department', component:  AddDepartmentComponent }
  ]},
  { path: 'detail-employee', component: DetailEmployeeComponent },
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'detail-department', component:  DetailDepartmentComponent },
  { path: 'add-department', component:  AddDepartmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
