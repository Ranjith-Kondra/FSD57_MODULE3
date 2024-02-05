import { Component, OnInit} from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

employees : any ; 
emailId : any;


constructor(private service: EmpService){
  //Getting emailId from LocalStorage
  this.emailId = localStorage.getItem('emailId');
  }
ngOnInit() {

  this.service.getEmployees().subscribe((data: any) => {
    console.log(data);
    this.employees = data;
});
    
}
editEmployee(emp: any) {
    
}


deleteEmployee(emp: any) {
  this.service.deleteEmployee(emp.empId).subscribe((data: any) => {console.log(data);});

  const i = this.employees.findIndex((element: any) => {
    return element.empId = emp.empId;
  });

  this.employees.splice(i, 1);

  alert('Employee Deleted Successfully!!!');
}

}
