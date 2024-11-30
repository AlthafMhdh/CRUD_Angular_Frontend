import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = 'https://localhost:44353';
  constructor(private http: HttpClient) {  }

  getAllEmployees(): Observable<Employee[]> {
    return  this.http.get<Employee[]>(this.apiUrl+'/api/Employees');
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id ='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.apiUrl+ '/api/Employees', addEmployeeRequest);
  }

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl+'/api/Employees/'+ id)
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee) : Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl + '/api/Employees/' + id, updateEmployeeRequest);
  }

  deleteEmployee(id: string) : Observable<Employee> {
    return this.http.delete<Employee>(this.apiUrl + '/api/Employees/' + id);
  }

}
