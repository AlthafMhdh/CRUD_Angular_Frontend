import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{

  addEmployeeRequest: Employee = {
    id:'',
    name:'',
    email: '',
    phoneNumber: 0,
    salary: 0,
    department: ''
  }

  constructor(private employeeService: EmployeesService, private router: Router) {}

  ngOnInit(): void {
      
  }

  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) =>{
        this.router.navigate(['employees']);
      }
    });
  }

}
