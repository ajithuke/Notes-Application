import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useFirebase} from '../context/Firebase';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        if(firebase.isLoggedIn){
            navigate("/")
        }
    },[firebase,navigate])

    const handleSubmit = (event) => {
        event.preventDefault()
        firebase.signInUser(email, password)
            .then(() => {
                console.log("signin successful");
            })
    }


    return (
        <div className="container">
            <h1 className="center">Login Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign in
                </Button>
                <h2 className="mt-4 mb-4">OR</h2>
                <Button onClick={firebase.signInWithGoogle} variant="success">Sign in With Google</Button>
            </Form>
        </div>
    )
}

export default LoginPage;