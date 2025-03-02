import { Routes } from '@angular/router';
import { FilterComponent } from '../componnents/filter/filter.component';
import { MoreDetailsComponent } from '../componnents/more-details/more-details.component';
import { CartComponent } from '../componnents/cart/cart.component';
import { RegisterComponent } from '../componnents/register/register.component';
import { LoginComponent } from '../componnents/login/login.component';
import { MapComponent } from '../componnents/map/map.component';
import { FindSizeComponent } from '../componnents/find-size/find-size.component';
import { SizeComponent } from '../componnents/size/size.component';
import { BabySizeComponent } from '../componnents/baby-size/baby-size.component';
import { ProductComponent } from '../componnents/product/product.component';

export const routes: Routes = [

  { path: 'allProducts/more-details/:productId', component: MoreDetailsComponent },

  // { path: 'more-details/cart/:productId', component: CartComponent },
  { path: 'more-details/cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'login', component: LoginComponent,
    children: [{ path: 'more-details.../:productId', component: MoreDetailsComponent }]
  },
  { path: 'cart', component: CartComponent },
  // {path: '**', redirectTo: 'products' },
  { path: 'products', component: FilterComponent },
  { path: 'map', component: MapComponent },
  { path: 'find size', component: FindSizeComponent },
  {path: 'size', component: BabySizeComponent  },
  {path: '**', component: ProductComponent },
  // { path: 'more products', component: MoreDetailsComponent },
];