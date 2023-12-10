import { BookingsList } from "../entities";

export interface AdminService {
    getBookings(): Promise<BookingsList>;

    filterBookingsAdmin(status: String): Promise<BookingsList>;

    updateStatus(bookingId: number, status: String): Promise<void>;
}