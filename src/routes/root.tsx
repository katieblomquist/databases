import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function root() {

    return (
        <>
            <div id="header" className="header">
                <h1>Booking Management</h1>
                <div>
                <Link to={`public`}>
                        <Button variant="contained">
                            Booking Form
                        </Button>
                    </Link>
                    <Link to={`admin`} className="adminButton">
                        <Button variant="contained">
                            Admin View
                        </Button>
                    </Link>
                    <Link to={`staff`} className="staffButton">
                        <Button variant="contained">
                            Staff View
                        </Button>
                    </Link>
                </div>

            </div>

            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}