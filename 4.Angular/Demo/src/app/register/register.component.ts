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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
    
  countries: any;

  constructor(private service: EmpService) {
  }


  ngOnInit() {
    this.service.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      console.log(data);
    });
  }
  
 

  registerSubmit(regForm: any) {
    console.log(regForm);
  }

}