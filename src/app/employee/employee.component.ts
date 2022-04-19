import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router'; 
import { Store } from '@ngrx/store';
import { Employee } from '../model/employee.model';
import { ServiceService } from '../service.ts/service.service';
import { setCurrentEmployee } from '../state/state.actions';
import { StateEmployee } from '../state/state.reducer';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass'],
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee?: Employee;
  constructor(
    private route: ActivatedRoute,
    private Data: ServiceService,
    private router: Router,
    private store: Store<StateEmployee>
  ) {}

  ngOnInit(): void {
    this.Data.getListEmployee().subscribe({
      next: (response: Employee[]) => {
        this.employees = response;
        console.log(response);
      },
    });
  }
  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
    this.router.navigate(['detail-employee']);
    // console.log(this.selectedEmployee);
    this.store.dispatch(
      setCurrentEmployee({ employee: this.selectedEmployee })
    );
    // this.router.navigate(['detail-employee'])
    // this.Data.sendDetailEmployee(this.selectedEmployee)
  }
  addEmployee(){
    this.router.navigate(['add-employee'])
  }
}
