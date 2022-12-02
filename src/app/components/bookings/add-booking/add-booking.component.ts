import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { BookingsService } from 'src/app/services/bookings.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  addBookingRequest:Booking = {
    id:'',
    name:'',
    email:'',
    phone:0,
    date:new Date(),
    price:0
  };
  constructor(private bookingService: BookingsService, private router:Router) { }

  ngOnInit(): void {
  }
  addBooking()
  {

    this.bookingService.addBooking(this.addBookingRequest)
    .subscribe({
      next:(booking) =>{
        this.router.navigate(['bookinglist']);
      },
      error:(booking) => {
        Swal.fire({
          title: 'Error!',
          text: 'Hall is already booked on that date',
          icon: 'error',
        })
      }

    });
  }
}
