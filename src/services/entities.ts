export type Booking = {booking_id: number, status: String, visit_date: String, length: String, street: String, city: String, zip: String, staffid: number, cname: String, fname: String};
export type Staff = {staffId: number, fName: String, lName: String, isAdmin: boolean};
export type BookingsList = Array<Booking>;
export type BookingId = Array<Object>;