import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { SelectionsComponent } from './order/selections/selections.component';
import { PaymentComponent } from './order/payment/payment.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MissedBirthdayDirective } from './missed-birthday.directive';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    MenuComponent,
    LocationsComponent,
    ContactComponent,
    SelectionsComponent,
    PaymentComponent,
    MissedBirthdayDirective
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
