import { useEffect, useState } from "react";
import { AdminService } from "../services/admin/admin.service";
import { HttpAdminService } from "../services/admin/http-admin.service";
import { BookingsList } from "../services/entities";
import { Button, Card, CardContent, List, MenuItem, Select, SelectChangeEvent, Skeleton, Typography } from "@mui/material";


const adminService: AdminService = new HttpAdminService;

export default function Admin() {
    const [bookingList, setBookings] = useState<BookingsList>([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(false);

    async function getAllBookings() {
        setLoading(true);
        try {
            await adminService.getBookings().then(d => {
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

    async function reject(bookingId: number) {
        try {
            await adminService.updateStatus(bookingId, 'reject');

        } catch (error) {
            console.log(error);
        }
        setLoading(true);
        if (filter === 'all') {
            getAllBookings();
        } else {
            adminFilter();
        }
        setLoading(false);
    };

    async function approve(bookingId: number) {
        try {
            await adminService.updateStatus(bookingId, 'approve');

        } catch (error) {
            console.log(error);
        }
        setLoading(true);
        if (filter === 'all') {
            getAllBookings();
        } else {
            adminFilter();
        }
        setLoading(false);
    };

    async function adminFilter() {
        console.log('Admin Filter Called');
        setLoading(true);
        try {
            await adminService.filterBookingsAdmin(filter).then(d => {
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

    const handleChange = (event: SelectChangeEvent) => {
        console.log('handle change called');
        setFilter(event.target.value as string);
    };

    useEffect(() => {
        getAllBookings();
    }, []);

    useEffect(() => {
        if (filter === 'all') {
            getAllBookings();
        } else {
            adminFilter();
        }

    }, [filter]);

    return (
        <>
            <div id="filter" className="filter">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Filter"
                    onChange={handleChange}
                >
                    <MenuItem value={'all'}>All</MenuItem>
                    <MenuItem value={'open'}>Open</MenuItem>
                    <MenuItem value={'pending'}>Awaiting Approval</MenuItem>
                    <MenuItem value={'approve'}>Booked</MenuItem>
                    <MenuItem value={'reject'}>Rejected</MenuItem>
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

                    <List className="bookings" dense sx={{ width: '100%', height: 700, bgcolor: 'background.paper', overflow: 'scroll' }} >
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
                                                <Button className="reject" onClick={() => {
                                                    reject(value.booking_id);
                                                }}> Reject </Button>
                                                <Button className="approve" onClick={() => {
                                                    approve(value.booking_id);
                                                }}> Approve </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            );
                        })}
                    </List>
                )}</div>
        </>
    )

}