import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ProductComponent } from '../componnents/product/product.component';
import { RegisterComponent } from '../componnents/register/register.component';
import { LoginComponent } from '../componnents/login/login.component';
import { FilterComponent } from '../componnents/filter/filter.component';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; 
import { FindSizeComponent } from '../componnents/find-size/find-size.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,ProductComponent,RegisterComponent, LoginComponent , FilterComponent , RouterLink  , FindSizeComponent


   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
