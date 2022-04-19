import { createAction, props } from '@ngrx/store';
import { Department } from '../model/department.model';
import { Employee } from '../model/employee.model';
export const setCurrentEmployee = createAction(
  '[Set Current Employee] Load Detail Employee',
  props<{ employee: Employee }>()
);

export const setCurrentDepartment = createAction(
  '[Set Current Department] Load Detail Department',
  props<{ department: Department}>()
);
