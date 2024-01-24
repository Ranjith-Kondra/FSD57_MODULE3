import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {

  id: number;
  name: string;
  avg: number;

  address: any;
  hobbies: any;
constructor(){
  alert("constructor invoked...");

  this.id = 101;
  this.name = 'Ranjith';
  this.avg = 54.32;

  this.address = {
    streetNo: 101,
    city:'Hyderabad',
    state: 'telangana'

  };

  this.hobbies = ['sleeping', 'eating', 'playing', 'Reading'];
}

ngOnInit(){
  // alert("constructor invoked...");
  }

}
