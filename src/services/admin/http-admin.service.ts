import { AdminService } from "./admin.service";
import { BookingsList } from "../entities";

export class HttpAdminService implements AdminService {
    async getBookings(): Promise<BookingsList> {
        let url = 'https://databasesv1-d069e4d2f410.herokuapp.com/bookings';
        const response = await fetch(url);
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        } else {
            console.log("wtf - get all bookings");
            return Promise.reject();
        }
    }
    async filterBookingsAdmin(status: string): Promise<BookingsList> {
        const url = new URL('https://databasesv1-d069e4d2f410.herokuapp.com/admin');
        url.searchParams.set('status', status);
        const response = await fetch(url, {
            method: "GET",
        });
        if (response.ok) {
            const jsonData = await response.json();
            return jsonData;
        } else {
            console.log("wtf - filter bookings admin");
            return Promise.reject();
        }
    }
    async updateStatus(bookingId: number, status: string): Promise<void> {
        const url = new URL('https://databasesv1-d069e4d2f410.herokuapp.com/updatestatus')
        url.searchParams.set('bookingId', JSON.stringify(bookingId));
        url.searchParams.set('status', status);

        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
        } else {
            console.log("wtf - update Status");
            return Promise.reject();
        }
    }

}