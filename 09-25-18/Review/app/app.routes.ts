import {Routes} from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {path: 'order', component: OrderComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'locations', component: LocationsComponent},
    {path: 'menu', component: MenuComponent},
    {path: '**', redirectTo: 'menu'}
]