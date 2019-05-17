import { CustomerRegisteration } from './customer-registeration.component';
import { CustomerLoginComponent } from './customer-login.component';
import {Routes} from  '@angular/router';

export const customerRoutes : Routes = [

    {path:"signup" , component:CustomerRegisteration },
    {path:"login" ,component:CustomerLoginComponent}


]