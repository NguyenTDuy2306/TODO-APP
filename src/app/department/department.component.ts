import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Department } from '../model/department.model';
import { ServiceService } from '../service.ts/service.service';
import { StateEmployee } from '../state/state.reducer';
import { setCurrentDepartment } from '../state/state.actions';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.sass']
})
export class DepartmentComponent implements OnInit {
  departments: Department[] = []
  selectedDepartment?: Department;
  departmentId!: string;
  constructor(
    private Data: ServiceService,
    private router: Router,
    private store: Store<StateEmployee>
  ) {}

  ngOnInit(): void {
    this.Data.getlistDepartment().subscribe({
      next: (response: Department[]) => {
        this.departments = response
        console.log(this.departments)
      },
    });
  }
  onSelect(department: Department): void {
    this.selectedDepartment = department;
    this.router.navigate(['detail-department']);
    this.store.dispatch(
      setCurrentDepartment({ department: this.selectedDepartment })
    );
    this.departmentId= String(this.selectedDepartment.id)
    this.Data.sendData(this.departmentId)
  }
  addDepartment(){
    this.router.navigate(['add-department'])
  }
}
