import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  isUserLoggedIn: boolean;
    //Cart using Service
    cartItems: any;

  //Dependency Injection for HttpClient
  constructor(private http: HttpClient) { 
    this.isUserLoggedIn = false;
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
  }

  getIsUserLogged(): boolean {
    return this.isUserLoggedIn;
  }

  //Logout
  setIsUserLoggedOut() {
    this.isUserLoggedIn = false;
  }

}


