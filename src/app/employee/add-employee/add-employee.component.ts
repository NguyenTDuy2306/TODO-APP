import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm = new FormGroup({
    dateOfBirth: new FormControl(''),
    firstName: new FormControl(''),
    gender: new FormControl(''),
    id: new FormControl(''),
    lastName: new FormControl(''),
    middleName: new FormControl(''),
    salary: new FormControl(''),
  });
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(['/employee-component'])
  }

}
