import { Component } from '@angular/core';
import { CustomerService } from '../../app/services/customer.service';
import { Customer } from '../../app/classes/customer';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../app/services/cart.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

   allCustomers: Customer[] = [];
    object = {
      email: '',
      password: '',  
    };
     customer: Customer = new Customer;
  
    constructor(public rc: CustomerService , public cart : CartService) { }
  
    loginC() {
      this.rc.login(this.object).subscribe(
        c => {
          this.cart.currentCustomer = c;
          console.log(this.cart.currentCustomer," current customer");
          Swal.fire('Success', 'Customer login successfully!', 'success');
        },
        err => {
          console.log("error: " + err.message);
        }
      );
      console.log("finished");
    }
  }
  

