// // import { Component, OnInit } from '@angular/core';

// // //Import Router class
// // import { Router } from '@angular/router';

// // @Component({
// //   selector: 'app-login',
// //   templateUrl: './login.component.html',
// //   styleUrl: './login.component.css'
// // })
// // export class LoginComponent implements OnInit {

// //   emailId: any;
// //   password: any;

// //   employees: any;
// //   emp: any;

// //   //Implementing Dependency Injection for RouterModule 
// //   constructor(private router: Router) {

// //     this.employees = [
// //       {empId: 101, empName:'Harsha', salary:1212.12, gender:'Male',   doj:'2018-11-15', country:'India',    emailId:'harsha@gmail.com', password:'123'},
// //       {empId: 102, empName:'Pasha',  salary:2323.23, gender:'Male',   doj:'2017-10-16', country:'China',    emailId:'pasha@gmail.com',  password:'123'},
// //       {empId: 103, empName:'Indira', salary:3434.34, gender:'Female', doj:'2016-09-17', country:'USA',      emailId:'indira@gmail.com', password:'123'},
// //       {empId: 104, empName:'Vamsi',  salary:4545.45, gender:'Male',   doj:'2015-08-18', country:'SriLanka', emailId:'vamsi@gmail.com',  password:'123'},
// //       {empId: 105, empName:'Venkat', salary:5656.56, gender:'Male',   doj:'2014-07-19', country:'Nepal',    emailId:'venkat@gmail.com', password:'123'}
// //     ];
// //   }

// //   ngOnInit(){
// //   }

// //   submit() {
// //     console.log("EmailId : " + this.emailId);
// //     console.log("Password: " + this.password);
// //   }

// //   loginSubmit(loginForm: any) {
// //     console.log(loginForm);
// //     console.log("EmailId : " + loginForm.emailId);
// //     console.log("Password: " + loginForm.password);

// //     if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {
// //       //Navigating/Routing to ShowEmployees Component
// //       this.router.navigate(['showemps']);
// //     } else {

// //       this.emp = null;

// //       this.employees.forEach((element: any) => {
// //         if (element.emailId == loginForm.emailId && element.password == loginForm.password) {
// //           this.emp = element;
// //         }
// //       });

// //       if (this.emp != null) {
// //         //Navigating/Routing to Products Component
// //         this.router.navigate(['products']);
// //       } else {
// //         alert('Invalid Credentials');
// //       }

// //     }

// //   }

// // }


// import { Component, OnInit } from '@angular/core';

// //Import Router class
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit {

//   emailId: any;
//   password: any;
//   employees: any;
//   emp: any;

//   constructor(private router: Router) {

//     this.employees = [
//       {empId: 101, empName:'Harsha', salary:1212.12, gender:'Male',   doj:'2018-11-15', country:'India',    emailId:'harsha@gmail.com', password:'123'},
//       {empId: 102, empName:'Pasha',  salary:2323.23, gender:'Male',   doj:'2017-10-16', country:'China',    emailId:'pasha@gmail.com',  password:'123'},
//       {empId: 103, empName:'Indira', salary:3434.34, gender:'Female', doj:'2016-09-17', country:'USA',      emailId:'indira@gmail.com', password:'123'},
//       {empId: 104, empName:'Vamsi',  salary:4545.45, gender:'Male',   doj:'2015-08-18', country:'SriLanka', emailId:'vamsi@gmail.com',  password:'123'},
//       {empId: 105, empName:'Venkat', salary:5656.56, gender:'Male',   doj:'2014-07-19', country:'Nepal',    emailId:'venkat@gmail.com', password:'123'}
//     ];
//   }

//   ngOnInit(){
//   }

//   submit() {
//     console.log("EmailId : " + this.emailId);
//     console.log("Password: " + this.password);
//   }

//   loginSubmit(loginForm: any) {
//     console.log(loginForm);
//     console.log("EmailId : " + loginForm.emailId);
//     console.log("Password: " + loginForm.password);

//     if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {
      
//       //Storing EmailId under LocalStorage
//       localStorage.setItem("emailId", loginForm.emailId);

//       this.router.navigate(['showemps']);
//     } else {

//       this.emp = null;

//       this.employees.forEach((element: any) => {
//         if (element.emailId == loginForm.emailId && element.password == loginForm.password) {
//           this.emp = element;
//         }
//       });

//       if (this.emp != null) {

//         //Storing EmailId under LocalStorage
//         localStorage.setItem("emailId", loginForm.emailId);

//         this.router.navigate(['products']);
//       } else {
//         alert('Invalid Credentials');
//       }

//     }

//   }

// }


// import { ToastrService } from 'ngx-toastr';
// import { Component, OnInit } from '@angular/core';

// //Import Router class
// import { Router } from '@angular/router';

// //Import EmpService
// import { EmpService } from '../emp.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent implements OnInit {

//   emailId: any;
//   password: any;
//   employees: any;
//   emp: any;

//   constructor(private router: Router,private toastr:ToastrService,private service: EmpService) {

//     this.employees = [
//       {empId: 101, empName:'Harsha', salary:1212.12, gender:'Male',   doj:'2018-11-15', country:'India',    emailId:'harsha@gmail.com', password:'123'},
//       {empId: 102, empName:'Pasha',  salary:2323.23, gender:'Male',   doj:'2017-10-16', country:'China',    emailId:'pasha@gmail.com',  password:'123'},
//       {empId: 103, empName:'Indira', salary:3434.34, gender:'Female', doj:'2016-09-17', country:'USA',      emailId:'indira@gmail.com', password:'123'},
//       {empId: 104, empName:'Vamsi',  salary:4545.45, gender:'Male',   doj:'2015-08-18', country:'SriLanka', emailId:'vamsi@gmail.com',  password:'123'},
//       {empId: 105, empName:'Venkat', salary:5656.56, gender:'Male',   doj:'2014-07-19', country:'Nepal',    emailId:'venkat@gmail.com', password:'123'}
//     ];
//   }

//   ngOnInit(){
//   }

//   submit() {
//     console.log("EmailId : " + this.emailId);
//     console.log("Password: " + this.password);
//   }

//   loginSubmit(loginForm: any) {
//     console.log(loginForm);
//     console.log("EmailId : " + loginForm.emailId);
//     console.log("Password: " + loginForm.password);

//     if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {
      
//        //Setting the isUserLoggedIn variable value to true under EmpService
//        this.service.setIsUserLoggedIn();

//       //Storing EmailId under LocalStorage
//       localStorage.setItem("emailId", loginForm.emailId);
//       this.toastr.success("Login sucess");
//       this.router.navigate(['showemps']);
//     } else {

//       this.emp = null;

//       this.employees.forEach((element: any) => {
//         if (element.emailId == loginForm.emailId && element.password == loginForm.password) {
//           this.emp = element;
//         }
//       });

//       if (this.emp != null) {
        
//         //Setting the isUserLoggedIn variable value to true under EmpService
//         this.service.setIsUserLoggedIn();
        
//         //Storing EmailId under LocalStorage
//         localStorage.setItem("emailId", loginForm.emailId);
//         this.toastr.success("Login sucess");
//         this.router.navigate(['products']);
//       } else {
//        this.toastr.error("Invalid Credentials")
//       }

//     }

//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  emp: any;

  //Dependency Injection for EmpService, Router
  constructor(private router: Router, private service: EmpService) {   
  }

  ngOnInit(){
  }

  async loginSubmit(loginForm: any) {
    if (loginForm.emailId == 'HR' && loginForm.password == 'HR') {           
      //Setting the isUserLoggedIn variable value to true under EmpService
      this.service.setIsUserLoggedIn();
      localStorage.setItem("emailId", loginForm.emailId);
      this.router.navigate(['showemps']);
    } else {
      this.emp = null;

      await this.service.employeeLogin(loginForm.emailId, loginForm.password).then((data: any) => {
        console.log(data);
        this.emp = data;
      });

      if (this.emp != null) {
        this.service.setIsUserLoggedIn();        
        localStorage.setItem("emailId", loginForm.emailId);
        this.router.navigate(['products']);
      } else {
        alert('Invalid Credentials');
      }
    }
  }
}