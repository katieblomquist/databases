import { BookingId } from "../entities";


export interface PublicService {

 newBooking(bookingId: number, fname: string, lname: string, phone:string, child: string, visit_date: string, visit_length: string, characterid: number, street: string, city: string, zip: string, agreeTos: boolean ): Promise<void>;

getBookingId(): Promise<BookingId>;
}