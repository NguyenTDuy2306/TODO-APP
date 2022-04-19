import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Department } from '../model/department.model';
import { Employee } from '../model/employee.model';
import { setCurrentDepartment, setCurrentEmployee } from './state.actions';

export interface StateEmployee {
  employeeList: Employee[];
  currentEmployee: any;
}

export interface StateDepartment {
  departmentList: Department[];
  currentDepartment: any
}
export const initialStateEmployee: StateEmployee = { employeeList: [], currentEmployee: null };
export const detailEmployeeReducer = createReducer(
  initialStateEmployee,
  on(setCurrentEmployee, (state, action): StateEmployee => {
    return {
      ...state,
      currentEmployee: action.employee,
    };
  })
);


export const initialStateDepartment: StateDepartment = { departmentList: [], currentDepartment: null};
export const detailDepartmentReducer = createReducer(
  initialStateDepartment,
  on(setCurrentDepartment, (state, action): StateDepartment =>{
    return {
      ...state,
      currentDepartment: action.department
    }
  })
)
