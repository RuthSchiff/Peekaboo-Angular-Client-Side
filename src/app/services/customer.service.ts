import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../classes/customer";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
    constructor(private http: HttpClient) {}  
    
    public Currentcustomer: Customer = new Customer;
   //adds a new customer to the database  //returns the new customer added  
    register(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>("https://localhost:7178/api/Customer/addCustomer", customer);
    }
   //returns the current customer that is logged in
    login(object : object): Observable<Customer> {
        return this.http.post<Customer>("https://localhost:7178/api/Customer/login" ,object);
    }
}