import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee.model';
import { StateEmployee } from 'src/app/state/state.reducer';
import { detailEmployee } from 'src/app/state/state.selector';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.sass']
})
export class DetailEmployeeComponent implements OnInit {
  // [x: string]: any;
  selectorEmployee$!: Observable<Employee>
  constructor(
    private store: Store<StateEmployee>,
    private router: Router,
  ) { }

  ngOnInit(): void {  
    this.selectorEmployee$ = this.store.select(detailEmployee)
  }
  onBack(){
    this.router.navigate(['/employee-component'])
  }
  onDelete(){
    
  }
}
