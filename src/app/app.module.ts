import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailDepartmentComponent } from './department/detail-department/detail-department.component';
import { DetailEmployeeComponent } from './employee/detail-employee/detail-employee.component';
import { StoreModule } from '@ngrx/store';
import {
  detailEmployeeReducer,
  detailDepartmentReducer,
} from './state/state.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    DetailDepartmentComponent,
    DetailEmployeeComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    StoreModule.forRoot({
      detailEmployee: detailEmployeeReducer,
      detailDepartment: detailDepartmentReducer,
    }),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
