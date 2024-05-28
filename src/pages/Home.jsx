import React, { useState } from "react";
import { Button } from "react-bootstrap"; // Make sure to import Button from 'react-bootstrap'
import Newnote from "../components/Newnote";

const HomePage = () => {
    const [showNewNote, setShowNewNote] = useState(false);

    const handleClick = () => {
        setShowNewNote(true);
    }

    return (
        <div className="d-grid gap-2 container mt-3">
            <Button variant="primary" size="lg" onClick={handleClick}>
                Add Note
            </Button>
            {showNewNote && <Newnote />}
        </div>
    )
}

export default HomePage;