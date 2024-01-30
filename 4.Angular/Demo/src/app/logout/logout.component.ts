import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Import EmpService
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  //Dependency Injection for EmpService and Router
  constructor(private router: Router, private service: EmpService) {

    localStorage.removeItem('emailId');
    localStorage.clear();

    //Setting the isUserLoggedIn variable value to false under EmpService
    this.service.setIsUserLoggedOut();

    alert('Successfully Logged Out');
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}


