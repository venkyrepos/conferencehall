import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingListComponent } from './components/bookings/booking-list/booking-list.component';
import { AddBookingComponent } from './components/bookings/add-booking/add-booking.component';
import { FormsModule } from '@angular/forms';
import { EditBookingComponent } from './components/bookings/edit-booking/edit-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingListComponent,
    AddBookingComponent,
    EditBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
