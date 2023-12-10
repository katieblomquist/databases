import { BookingsList } from "../entities";

export interface StaffService {

    filterBookingsStaff(staffId: number, status: String): Promise<BookingsList>;

    updateStaffId(staffId: number, bookingId: number): Promise<void>;
}