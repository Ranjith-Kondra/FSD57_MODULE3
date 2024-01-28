import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

employees : any ; 


constructor(){
  this.employees = [

    {
     empId : 101,
     empName : 'vinay',
     salary : 200000,
     gender : 'Male',
     dateOfjoining : '2020-01-10',
     country : 'INDIA',
     emailId : 'vinay@gmail.com',
     password : 123
    },
    {
     empId: 102,
     empName: 'uday', 
     salary: 300000,
     gender : 'Male',
     dateOfjoining: '2022-02-11',
     country : 'USA',
     emailId:'uday@gmail.com',
     password:111
    },
    {
     empId: 103,
     empName: 'vamshi', 
     salary: 400000,
     gender : 'Male',
     dateOfjoining: '2023-02-11',
     country : 'UK',
     emailId:'vamshi@gmail.com',
     password:222
    },
    {
     empId: 104,
     empName: 'pranay', 
     salary: 500000,
     gender : 'Male',
     dateOfjoining: '2024-02-11',
     country : 'INDIA',
     emailId:'pranay@gmail.com',
     password:333
    },
    {
     empId: 105,
     empName: 'karthik', 
     salary: 700000,
     gender : 'Male',
     dateOfjoining: '2021-03-11',
     country : 'INDIA',
     emailId:'karthik@gmail.com',
     password:444
    }
   ];
   

  }
ngOnInit() {
    
  }

}
