import { StaffService } from "./staff.service";
import { BookingsList } from "../entities";

export class HttpStaffService implements StaffService{

    async filterBookingsStaff(staffId: number, status: string): Promise<BookingsList> {
        const url = new URL('https://databasesv1-d069e4d2f410.herokuapp.com/staff');
        url.searchParams.set('staffId', JSON.stringify(staffId));
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
    async updateStaffId(staffId: number, bookingId: number): Promise<void> {
        console.log("called staff filter");
        const url = new URL('https://databasesv1-d069e4d2f410.herokuapp.com/updatestaff');
        url.searchParams.set('staffId', JSON.stringify(staffId));
        url.searchParams.set('bookingId', JSON.stringify(bookingId));
        const response = await fetch(url, {
            method: "PATCH",
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
        } else {
            console.log("wtf - update Staff Id");
            return Promise.reject();
        }
    }
    
}