import { Gender } from "../enum/gender";

export interface employeeRequest{
    dateOfBirth: Date
    firstName: string 
    gender: Gender
    id: number 
    lastName: string 
    middleName:string
    salary: number 
}