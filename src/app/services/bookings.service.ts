import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  baseApiUrl = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllBookings():Observable<Booking[]>
  {
    return this.http.get<Booking[]>(this.baseApiUrl +'/api/Booking');
  }

  addBooking(addBookingRequest:Booking):Observable<Booking>
  {
    addBookingRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Booking>(this.baseApiUrl +'/api/Booking', addBookingRequest);
  }

  getBooking(id:string): Observable<Booking>
  {
    return this.http.get<Booking>(this.baseApiUrl + '/api/Booking/' + id);
  }

  updateBooking(id:string, updateBookingRequest:Booking): Observable<Booking>
  {
    return this.http.put<Booking>(this.baseApiUrl + '/api/Booking/' + id, updateBookingRequest);
  }

  deleteBooking(id:String): Observable<Booking>
  {
    return this.http.delete<Booking>(this.baseApiUrl + '/api/Booking/' + id);
  }
}
