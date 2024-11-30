import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';
import { response } from 'express';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe({
        next: (employees) =>{
          this.employees = employees;
        },
        error: (response) =>{
          console.log(response);
        }
      })
  }
}
