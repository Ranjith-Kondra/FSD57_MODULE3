// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent implements OnInit {
  
//   empName: any;
//   salary: any;
//   gender: any;
//   doj: any;
//   country: any;
//   emailId: any;
//   password: any;
  
//   constructor() {
//   }

//   ngOnInit() {
//   }

//   submit() {
//     console.log("EmpName: " + this.empName);
//     console.log("Salary: " + this.salary);
//     console.log("Gender: " + this.gender);
//     console.log("DateOfJoin: " + this.doj);
//     console.log("Country: " + this.country);
//     console.log("Email-Id: " + this.emailId);
//     console.log("Password: " + this.password);
//   }
//   registerSubmit(registerForm: any) {
//     console.log(registerForm);
     
//     console.log("EmpName: " +registerForm.empName);
//     console.log("Salary: " + registerForm.salary);
//     console.log("Gender: " + registerForm.gender);
//     console.log("DateOfJoin: " +registerForm.doj);
//     console.log("Country: " + registerForm.country);
//     console.log("EmailId : " + registerForm.emailId);
//     console.log("Password: " + registerForm.password);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  
  countries: any;
  departments: any;
  emp: any;

  constructor(private service: EmpService, private router: Router) {
    this.emp = {
      empName:'',
      salary:'',
      gender:'',
      doj:'',
      country:'',
      emailId:'',
      password:'',
      department: {
        deptId:''
      }
    };
  }

  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => {this.countries = data;});
    this.service.getAllDepartments().subscribe((data: any) => {this.departments = data;});
  }
 

  registerSubmit(regForm: any) {
    console.log(regForm);

    this.emp.empName = regForm.empName;
    this.emp.salary = regForm.salary;
    this.emp.gender = regForm.gender;
    this.emp.doj = regForm.doj;
    this.emp.country = regForm.country;
    this.emp.emailId = regForm.emailId;
    this.emp.password = regForm.password;
    this.emp.department.deptId = regForm.department;

    console.log(this.emp);

    this.service.registerEmployee(this.emp).subscribe((data: any) => {console.log(data);});

    this.router.navigate(['login']);
  }

}

