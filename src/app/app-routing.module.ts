import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './components/bookings/add-booking/add-booking.component';
import { BookingListComponent } from './components/bookings/booking-list/booking-list.component';
import { EditBookingComponent } from './components/bookings/edit-booking/edit-booking.component';

const routes: Routes = [
  {
    path:'',
    component:BookingListComponent
  },
  {
    path:'bookinglist',
    component:BookingListComponent
  },
  {
    path:'bookinglist/add',
    component:AddBookingComponent
  },
  {
    path:'bookinglist/edit/:id',
    component:EditBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
