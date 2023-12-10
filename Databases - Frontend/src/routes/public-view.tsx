import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Skeleton, TextField } from "@mui/material";
import { HttpPublicService } from "../services/public/http-public.service";
import { PublicService } from "../services/public/public.service";
import { useEffect, useState } from "react";


const publicService: PublicService = new HttpPublicService;

export default function PublicView() {

    const [bookingId, setId] = useState(0);
    const [fname, setFirst] = useState('');
    const [lname, setLast] = useState('');
    const [phone, setPhone] = useState('');
    const [child, setChild] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [visit_length, setLength] = useState('');
    const [characterid, setcharId] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [agreeTos, setTos] = useState(false);
    const [loading, setLoading] = useState(false);


    async function getBookingId() {
        setLoading(true);
        try {
            await publicService.getBookingId().then(d => {
                setId(Object.values(d[0])[0] + 1);
            })
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    async function newBooking() {

        const date = year + '-' + month + '-' + day;
        const characterR = parseInt(characterid);

        try {
            await publicService.newBooking(bookingId, fname, lname, phone, child, date, visit_length, characterR, street, city, zip, agreeTos);
        } catch (error) {
            console.log(error);
        }
        reset();

    }

    function reset() {
        setId(0);
        setFirst('');
        setLast('');
        setPhone('');
        setChild('');
        setYear('');
        setMonth('');
        setDay('');
        setLength('');
        setcharId('');
        setStreet('');
        setCity('');
        setZip('');
        setTos(false);
    }


    useEffect(() => {
        getBookingId();
    }, []);


    return (
        <>
            <div className="bookingForm">
            {loading ? (
                    <>
                        <Skeleton animation="wave" variant="rounded" width={600} height={600} sx={{ margin: 1 }} />
                    </>
                ) : (
                <><div className="nameSection">
                            <TextField sx={{ m: 2, width: 400 }} value={fname} id="fname" label="First Name" variant="outlined" onChange={(e) => {
                                setFirst(e.target.value);
                            } } />
                            <TextField sx={{ m: 2, width: 400 }} value={lname} id="lname" label="Last Name" variant="outlined" onChange={(e) => {
                                setLast(e.target.value);
                            } } />
                        </div><div className="infoSection">
                                <TextField sx={{ m: 2, width: 400 }} value={phone} id="phone" label="Phone Number" variant="outlined" onChange={(e) => {
                                    setPhone(e.target.value);
                                } } />
                                <TextField sx={{ m: 2, width: 400 }} value={child} id="child" label="Child's Name" variant="outlined" onChange={(e) => {
                                    setChild(e.target.value);
                                } } />
                            </div><div className="dateSection">
                                <FormControl sx={{ m: 2, width: 250 }}>
                                    <InputLabel id="year-label">Year</InputLabel>
                                    <Select
                                        labelId="year-label"
                                        id="year"
                                        value={year}
                                        label="Year"
                                        onChange={(e) => {
                                            setYear(e.target.value as string);
                                        } }
                                    >

                                        <MenuItem value={'2023'}>2023</MenuItem>
                                        <MenuItem value={'2024'}>2024</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 2, width: 250 }}>
                                    <InputLabel id="month-label">Month</InputLabel>
                                    <Select
                                        labelId="month-label"
                                        id="month"
                                        value={month}
                                        label="Month"
                                        onChange={(e) => {
                                            setMonth(e.target.value as string);
                                        } }
                                    >
                                        <MenuItem value={'01'}>January</MenuItem>
                                        <MenuItem value={'02'}>February</MenuItem>
                                        <MenuItem value={'03'}>March</MenuItem>
                                        <MenuItem value={'04'}>April</MenuItem>
                                        <MenuItem value={'05'}>May</MenuItem>
                                        <MenuItem value={'06'}>June</MenuItem>
                                        <MenuItem value={'07'}>July</MenuItem>
                                        <MenuItem value={'08'}>August</MenuItem>
                                        <MenuItem value={'09'}>September</MenuItem>
                                        <MenuItem value={'10'}>October</MenuItem>
                                        <MenuItem value={'11'}>November</MenuItem>
                                        <MenuItem value={'12'}>December</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 2, width: 250 }}>
                                    <InputLabel id="day-label">Day</InputLabel>
                                    <Select
                                        labelId="day-label"
                                        id="day"
                                        value={day}
                                        label="Day"
                                        onChange={(e) => {
                                            setDay(e.target.value as string);
                                        } }
                                    >
                                        <MenuItem value={'01'}>1</MenuItem>
                                        <MenuItem value={'02'}>2</MenuItem>
                                        <MenuItem value={'03'}>3</MenuItem>
                                        <MenuItem value={'04'}>4</MenuItem>
                                        <MenuItem value={'05'}>5</MenuItem>
                                        <MenuItem value={'06'}>6</MenuItem>
                                        <MenuItem value={'07'}>7</MenuItem>
                                        <MenuItem value={'08'}>8</MenuItem>
                                        <MenuItem value={'09'}>9</MenuItem>
                                        <MenuItem value={'10'}>10</MenuItem>
                                        <MenuItem value={'11'}>11</MenuItem>
                                        <MenuItem value={'12'}>12</MenuItem>
                                        <MenuItem value={'13'}>13</MenuItem>
                                        <MenuItem value={'14'}>14</MenuItem>
                                        <MenuItem value={'15'}>15</MenuItem>
                                        <MenuItem value={'16'}>16</MenuItem>
                                        <MenuItem value={'17'}>17</MenuItem>
                                        <MenuItem value={'18'}>18</MenuItem>
                                        <MenuItem value={'19'}>19</MenuItem>
                                        <MenuItem value={'20'}>20</MenuItem>
                                        <MenuItem value={'21'}>21</MenuItem>
                                        <MenuItem value={'22'}>22</MenuItem>
                                        <MenuItem value={'23'}>23</MenuItem>
                                        <MenuItem value={'24'}>24</MenuItem>
                                        <MenuItem value={'25'}>25</MenuItem>
                                        <MenuItem value={'26'}>26</MenuItem>
                                        <MenuItem value={'27'}>27</MenuItem>
                                        <MenuItem value={'28'}>28</MenuItem>
                                        <MenuItem value={'29'}>29</MenuItem>
                                        <MenuItem value={'30'}>30</MenuItem>
                                        <MenuItem value={'31'}>31</MenuItem>
                                    </Select>
                                </FormControl>
                            </div><div className="visitSection">
                                <FormControl sx={{ m: 2, width: 400 }}>
                                    <InputLabel id="visit-length-label">Visit Length</InputLabel>
                                    <Select
                                        labelId="vist-length-label"
                                        id="visit-length"
                                        value={visit_length}
                                        label="Visit Length"
                                        onChange={(e) => {
                                            setLength(e.target.value as string);
                                        } }
                                    >
                                        <MenuItem value={'30 Minutes'}>30 Minutes</MenuItem>
                                        <MenuItem value={'1 Hour'}>1 Hour</MenuItem>
                                        <MenuItem value={'1.5 Hour'}>1.5 Hour</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl sx={{ m: 2, width: 400 }}>
                                    <InputLabel id="character-label">Select Character</InputLabel>
                                    <Select
                                        labelId="character-label"
                                        id="character"
                                        value={characterid}
                                        label="Select Character"
                                        onChange={(e) => {
                                            setcharId(e.target.value as string);
                                        } }
                                    >
                                        <MenuItem value={'1'}>Ice Queen</MenuItem>
                                        <MenuItem value={'2'}>Snow Princess</MenuItem>
                                        <MenuItem value={'3'}>Mermaid Princess</MenuItem>
                                        <MenuItem value={'4'}>Rose Princess</MenuItem>
                                        <MenuItem value={'5'}>Glass Princess</MenuItem>
                                        <MenuItem value={'6'}>Sleeping Princess</MenuItem>
                                        <MenuItem value={'7'}>Tower Princess</MenuItem>
                                        <MenuItem value={'8'}>Wayfinding Princess</MenuItem>
                                        <MenuItem value={'9'}>Bayou Princess</MenuItem>
                                    </Select>
                                </FormControl>
                            </div><div className="addressSection">
                                <TextField sx={{ m: 2, width: 850 }} value={street} id="street" label="Street" variant="outlined" onChange={(e) => {
                                    setStreet(e.target.value);
                                } } />
                                <div>
                                    <TextField sx={{ m: 2, width: 400 }} value={city} id="city" label="City" variant="outlined" onChange={(e) => {
                                        setCity(e.target.value);
                                    } } />
                                    <TextField sx={{ m: 2, width: 400 }} value={zip} id="zip" label="Zip Code" variant="outlined" onChange={(e) => {
                                        setZip(e.target.value);
                                    } } />
                                </div>


                            </div><FormControlLabel
                                value="end"
                                control={<Checkbox
                                    checked={agreeTos}
                                    onChange={(e) => {
                                        setTos(e.target.checked);
                                    } }
                                    inputProps={{ 'aria-label': 'controlled' }} />}
                                label="Agree to Terms of Service"
                                labelPlacement="end"
                                sx={{ m: 2 }} /><Button variant="contained"
                                    sx={{ m: 2, width: 400 }}
                                    onClick={() => {
                                        newBooking();
                                    } }
                                >Request Booking</Button></> )}
            </div>
        </>
    )
}