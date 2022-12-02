import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking.model';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  bookingList: Booking[] = [];
  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.bookingsService.getAllBookings()
    .subscribe({
      next:(bookings) =>{
        this.bookingList = bookings;
        console.log(bookings);
      },
      error:(response) =>{
        console.log(response);
      }
    });
  }

}
