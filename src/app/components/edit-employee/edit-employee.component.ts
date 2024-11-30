import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { response } from 'express';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  imports: [FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee ={
      id:'',
      name:'',
      email: '',
      phoneNumber: 0,
      salary: 0,
      department: ''
  }

  constructor(private route: ActivatedRoute, private employeeSerice: EmployeesService, private router: Router) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) =>{
            const id = params.get('id')

            if (id) {
              this.employeeSerice.getEmployee(id).subscribe({
                next: (response) =>{
                  console.log(response);
                    this.employeeDetails = response;
                }
              })
            }
        }
      })
  }

  updateEmployee() {
    this.employeeSerice.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }

  deleteEployee(id: string) {
    this.employeeSerice.deleteEmployee(id).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }

}
