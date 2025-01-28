import { Group } from "./Group";

export type Employee = {
    id: number;
    name: String;
    email: String;
}

export type EmployeeDetail = Employee & {
    groups: Group[]
}

export type ApiGetEmployees = {
    employees: Employee[]
 }


export type ApiGetEmployee = EmployeeDetail;










