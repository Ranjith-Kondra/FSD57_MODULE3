import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  emailId: any;
  password: any;

  constructor(){
    // this.emailId = "ranjith@gmail.com";
    // this.password = 123;
  }

  ngOnInit(){

  }
    submit() {
    //alert("Button Clicked...");
    console.log(this.emailId);
    console.log(this.password);
  }

}
