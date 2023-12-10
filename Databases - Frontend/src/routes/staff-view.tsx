import { StaffService } from "../services/staff/staff.service";
import { HttpStaffService } from "../services/staff/http-staff.service";
import { useEffect, useState } from "react";
import { BookingsList } from "../services/entities";
import { Button, Card, CardContent, List, MenuItem, Select, SelectChangeEvent, Skeleton, Typography } from "@mui/material";

const staffService: StaffService = new HttpStaffService;

export default function staff() {
    const [bookingList, setBookings] = useState<BookingsList>([]);
    const [filter, setFilter] = useState('open');
    const [loading, setLoading] = useState(false);
    const [accepted, setAccepted] = useState(0);

    async function staffFilter(staffId: number) {
        setLoading(true);
        setBookings([]);
        try {
            await staffService.filterBookingsStaff(staffId, filter).then(d => {
                d.forEach((element) => {
                    element.visit_date = element.visit_date.replace(/T00:00:00.000Z/g, "");
                });
                setBookings(d);
            });
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    async function accept(staffId: number, bookingId: number) {
        try {
            console.log(staffId);
            console.log(bookingId)
            await staffService.updateStaffId(staffId, bookingId);
            setAccepted(bookingId);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event: SelectChangeEvent) => {
        console.log('handle change called');
        setFilter(event.target.value as string);
    };

    useEffect(() => {
        staffFilter(1);
    }, []);

    useEffect(() => {
        staffFilter(1);
        
    }, [filter]);

    useEffect(() =>{
        staffFilter(1);
    }, [accepted]);

    return (
        <>
            <div className="filter" id="filter">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Filter"
                    onChange={handleChange}
                >
                    <MenuItem value={'open'}>Open</MenuItem>
                    <MenuItem value={'pending'}>Awaiting Approval</MenuItem>
                    <MenuItem value={'approve'}>Booked</MenuItem>
                </Select>
            </div>
            <div id="bookings">
            {loading ? (
                    <>
                        <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
                        <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
                        <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
                        <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
                        <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
                        <Skeleton animation="wave" variant="rounded" width={300} height={300} sx={{ margin: 1 }} />
                    </>
                ) : (
                <List className="bookings" dense sx={{ width: '100%', height: 700, bgcolor: 'background.paper', overflow: 'scroll' }}>
                    {bookingList.map((value) => {
                        return (
                            <div className="card" key={value.booking_id}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Status: {value.status}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Character: {value.cname}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Date: {value.visit_date}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Location: {value.street}, {value.city}, {value.zip}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            Performer: {value.fname}
                                        </Typography>
                                        <div className="buttons">
                                            <Button onClick={() => {
                                                accept(1, value.booking_id);
                                            }}> Accept </Button>

                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </List> )}
            </div> 
        </>
    )
}