import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFirebase } from "../context/Firebase";

const Newnote = () => {
    const firebase = useFirebase()
    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        
        firebase.addNote(title, note)
            .then((snap) => {
                console.log("note added");
                setTitle("");
                setNote("");
            })
            .catch((err) => { 
                console.log(err) 
            });
    }

    return (
        <Form className="mt-3" onSubmit={handleClick}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Add Titke</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your title here"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Add Note</Form.Label>
                <Form.Control
                    value={note}
                    as="textarea"
                    placeholder="Enter your note here"
                    rows={3}
                    onChange={(e) => { setNote(e.target.value) }}
                />
            </Form.Group>
            <div className="ml-auto">
                <Button className="mt-3" type="submit">Add</Button>
            </div>
        </Form>
    )
}

export default Newnote;