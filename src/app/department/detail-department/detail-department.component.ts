import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Department } from 'src/app/model/department.model';
import { StateDepartment } from 'src/app/state/state.reducer';
import { detailDepartment } from 'src/app/state/state.selector';
import { ServiceService } from 'src/app/service.ts/service.service';
@Component({
  selector: 'app-detail-department',
  templateUrl: './detail-department.component.html',
  styleUrls: ['./detail-department.component.sass'],
})
export class DetailDepartmentComponent implements OnInit {
  depertmentSelector$!: Observable<Department>;
  departmentId!: string;
  constructor(
    private store: Store<StateDepartment>,
    private router: Router,
    private Data: ServiceService
  ) {}

  ngOnInit(): void {
    this.depertmentSelector$ = this.store.select(detailDepartment);
  }
  onBack() {
    this.router.navigate(['/department-component']);
  }
  onDelete() {
    this.Data.deleteDepartment().subscribe({
      next: (reponse) => console.log('department'),
    });
    this.departmentId = this.Data.getData();
    console.log(this.departmentId);
    this.router.navigate(['/department-component']);
  }
  onUpdate() {}
}
