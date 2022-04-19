import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Employee } from '../model/employee.model';
import { StateEmployee, StateDepartment } from './state.reducer';

const getDetailEmployeeState = createFeatureSelector<StateEmployee>('detailEmployee');
const getDetailDepartmentState = createFeatureSelector<StateDepartment>('detailDepartment');
export const detailEmployee = createSelector(
  getDetailEmployeeState,
  (state) => state.currentEmployee
);

export const detailDepartment = createSelector(
  getDetailDepartmentState,
  (state) => state.currentDepartment
)