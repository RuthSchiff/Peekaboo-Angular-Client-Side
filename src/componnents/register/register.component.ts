import { Component } from '@angular/core';
import { CustomerService } from '../../app/services/customer.service';
import { Customer } from '../../app/classes/customer';
import { FormsModule } from '@angular/forms';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { CartService } from '../../app/services/cart.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  allCustomers: Customer[] = [];
  customer: Customer = new Customer();  
  constructor(public rc: CustomerService , public cart : CartService) { }

  registerC() {
    this.rc.register(this.customer).subscribe(
      c => {
        console.log(c);

        this.rc.Currentcustomer.customerName = c.customerName;
        this.cart.currentCustomer = c; 

        console.log(this.rc.Currentcustomer.customerId +" current customer id");
        
        Swal.fire('Success', 'Customer registered successfully!', 'success');

      },
      err => {
        console.log("error: " + err.message);
      }
    );
    console.log("finished");
  }
}
