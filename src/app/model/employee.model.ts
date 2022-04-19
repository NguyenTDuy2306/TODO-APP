import { Gender } from "../enum/gender"
import { Department } from "./department.model"

export interface Employee{
    dateOfBirth: Date
    department: Department 
    firstName: string 
    gender: Gender
    id: number 
    lastName: string 
    middleName:string
    salary: number 
}