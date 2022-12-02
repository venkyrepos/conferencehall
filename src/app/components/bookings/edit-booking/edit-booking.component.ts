import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  bookingDetails : Booking = {
    id:'',
    name:'',
    email:'',
    phone:0,
    date:new Date(),
    price:0
  };
  constructor(private route: ActivatedRoute, private bookingService: BookingsService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params)=>{
        const id = params.get('id');
        if(id)
        {
          this.bookingService.getBooking(id)
          .subscribe({
             next: (response) => {
                this.bookingDetails = response;
             }
          });
        }
      }
    })
  }
  updateBooking()
  {
    this.bookingService.updateBooking(this.bookingDetails.id, this.bookingDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['bookinglist']);
      }
    });
  }

  deleteBooking(id: string)
  {
    this.bookingService.deleteBooking(id)
    .subscribe({
      next:(response) => {
        this.router.navigate(['bookinglist']);
      }
    });
  }

}
