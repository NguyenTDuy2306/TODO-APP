import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.ts/service.service';
import { departmentRequest } from 'src/app/model/department-request.model';
@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.sass']
})
export class AddDepartmentComponent implements OnInit {
  private departmentRequest!: departmentRequest
  isSuccess!: boolean 
  addDepartmentForm = new FormGroup({
    name: new FormControl(''),
    startDate: new FormControl('')
  })
  constructor(
    private router: Router,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
  }
  onBack(){
    this.router.navigate(['/department-component'])
  }
  onAdd(){
    this.departmentRequest = this.addDepartmentForm.value
    console.log(this.departmentRequest.name);
    this.service.addDepartment(this.departmentRequest).subscribe(
      data => {
        if(data!== null)
          this.router.navigate(['/department-component'])
      }
    )
  }
}
