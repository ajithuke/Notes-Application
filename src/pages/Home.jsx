import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Newnote from "../components/Newnote";
import { useFirebase } from "../context/Firebase";
import MyCard from "../components/Card.jsx";

const HomePage = () => {
    const firebase = useFirebase();
    const [showNewNote, setShowNewNote] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        firebase.getNotes().then((snap) => { setNotes(snap.docs) });
    }, [firebase])

    const handleClick = () => {
        console.log(notes);
        setShowNewNote(true);
    }

    return (
        <div className="d-grid gap-2 container mt-3">
            <Button variant="primary" size="lg" onClick={handleClick}>
                Add Note
            </Button>
            {showNewNote && <Newnote />}
            <hr />
            <h1 className="center" style={{ marginTop: 20 }}>Notes</h1>
            <div>
                {notes.map((note) => (
                    <MyCard key={note.id} title={note.data().title} note={note.data().note} />
                ))}
            </div>
        </div>
    )
}

export default HomePage;