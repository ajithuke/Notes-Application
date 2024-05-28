import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    }

    return (
        <Navbar className="navbar-light">
            <Nav>
                <Nav.Item>
                    {firebase.isLoggedIn ? <Nav.Link onClick={firebase.signOutUser}>Log Out</Nav.Link> : <Nav.Link onClick={handleClick}>Log In</Nav.Link>}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default MyNavbar;
