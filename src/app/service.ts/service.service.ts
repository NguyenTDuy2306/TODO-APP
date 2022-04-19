import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, map } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';
import { Department } from '../model/department.model';
import { departmentRequest } from '../model/department-request.model';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  departmentId!: string
  listEmployee: Employee[] = []
  listDepartment: Department[] = []
  EmployeeUrl = environment.BACKEND + 'employees'
  DepartmentUrl = environment.BACKEND + 'departments'
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  sendData(departmentId: string){
    this.departmentId = departmentId
    return this.departmentId
  }

  getData(){
    return this.departmentId
  }


  getListEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.EmployeeUrl)
    .pipe(map(response => {
      if(response){
        return Object.values(response);
      }
      return []
    }));
  }

  getlistDepartment(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.DepartmentUrl)
    .pipe(map(response => {
      if(response){
        return Object.values(response);
      }
      return []
    }));
  }

  deleteDepartment(): Observable<Department>{
    return this.httpClient.delete<Department>(this.DepartmentUrl + '/' + this.departmentId)
  }

  addDepartment(departmentRequest: departmentRequest): Observable<departmentRequest>{
    return this.httpClient.post<departmentRequest>(this.DepartmentUrl + "/add", departmentRequest)
  }

  updateDepartment(departmentRequest: departmentRequest, departmentId: number): Observable<departmentRequest>{
    return this.httpClient.put<departmentRequest>(this.DepartmentUrl + '/' + departmentId, departmentRequest)
  }
}
