import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  isUserLoggedIn: boolean;
  loginStatus: any;
    //Cart using Service
    cartItems: any;

  //Dependency Injection for HttpClient
  constructor(private http: HttpClient) { 
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject();
     //Cart using Service
     this.cartItems = [];
  }

  getAllCountries(): any {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getEmployees(): any {
    return this.http.get('http://localhost:8085/getEmployees');
}
getEmployeeById(): any {
  return this.http.get('http://localhost:8085/getEmployeeById');
}

getAllDepartments(): any {
  return this.http.get('http://localhost:8085/getDepartments');
}
registerEmployee(employee: any): any {
  return this.http.post('http://localhost:8085/addEmployee', employee);
}
employeeLogin(emailId: any, password: any): any {
  return this.http.get('http://localhost:8085/empLogin/' + emailId + '/' + password).toPromise();
}

deleteEmployee(empId: any) {
  return this.http.delete('http://localhost:8085/deleteEmployeeById/' + empId);
}
updateEmployee(employee: any) {
  return this.http.put('http://localhost:8085/updateEmployee', employee);
}



//Cart using Service
addToCart(product: any) {
  this.cartItems.push(product);
}
//Cart using Service
getCartItems(): any {
  return this.cartItems;
}
  //Login
  setIsUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
  }

  getIsUserLogged(): boolean {
    return this.isUserLoggedIn;
  }
  getLoginStatus(): any {
    return this.loginStatus.asObservable();
  }

  //Logout
  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
  }

}


