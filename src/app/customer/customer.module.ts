import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegisteration } from './customer-registeration.component';
import { RouterModule } from '@angular/router';
import { customerRoutes } from './customer.route';


@NgModule({

    declarations: [CustomerRegisteration,
                    CustomerLoginComponent
    ],
    imports: [BrowserModule,
        RouterModule.forChild(customerRoutes)

    ],
    exports: [
        
        CustomerRegisteration
    ]

})
export class CustomerModule {




}