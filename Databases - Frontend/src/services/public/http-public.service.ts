import { BookingId } from "../entities";
import { PublicService } from "./public.service";

export class HttpPublicService implements PublicService{
    async getBookingId(): Promise<BookingId> {
        const url = new URL('https://databasesv1-d069e4d2f410.herokuapp.com/bookingid');
        const response = await fetch(url);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        } else {
            console.log("wtf - get Booking Id");
            return Promise.reject();
        }
    }
    
    async newBooking(bookingId: number, fname: string, lname: string, phone: string, child: string, visit_date: string, visit_length: string, characterid: number, street: string, city: string, zip: string, agreeTos: boolean): Promise<void> {
        const url = new URL('https://databasesv1-d069e4d2f410.herokuapp.com/newBooking');
        url.searchParams.set('bookingId', JSON.stringify(bookingId));
        url.searchParams.set('fname', fname);
        url.searchParams.set('lname', lname);
        url.searchParams.set('phone', phone);
        url.searchParams.set('child', child);
        url.searchParams.set('visit_date', visit_date);
        url.searchParams.set('visit_length', visit_length);
        url.searchParams.set('characterid', JSON.stringify(characterid));
        url.searchParams.set('street', street);
        url.searchParams.set('city', city);
        url.searchParams.set('zip', zip);
        url.searchParams.set('agreeTos', JSON.stringify(agreeTos));

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
        } else {
            console.log("wtf - new Booking");
            return Promise.reject();
        }
    }

}