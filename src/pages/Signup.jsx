import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
const SignupPage = () => {

    const firebase = useFirebase()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        firebase.signUpUser(email, password)
            .then(() => {
                console.log("signup successful");
                setEmail("")
                setPassword("")
                navigate("/")
            })
    }

    return (
        <div className="container">
            <h1 className="center">Signup Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
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
                    Sign up
                </Button>
            </Form>
        </div>
    )
}

export default SignupPage;