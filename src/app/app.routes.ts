import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

export const routes: Routes = [
    {
        path :'',
        component: EmployeeListComponent
    },
    {
        path :'employees',
        component: EmployeeListComponent
    },
    {
        path :'employee/add',
        component: AddEmployeeComponent
    },
    {
        path :'employee/edit/:id',
        component: EditEmployeeComponent
    }
];
