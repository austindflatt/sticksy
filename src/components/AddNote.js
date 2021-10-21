import React, { useState } from 'react'
import { Textarea, Button, Container } from '@mantine/core';

const AddNote = () => {
    const [noteText, setNoteText] = useState("");

    const handleChange = (event) => {
        setNoteText(event.target.value);

    }
    const handleSaveClick = () => {
        
    }
    return (
        <div>
            <Container>
            <Textarea
            placeholder="Type to add a note..."
            variant="unstyled"
            size="lg"
            required
            value={noteText}
            onChange={handleChange}
            />
            <>
            <p>200 remaining</p>
            <Button variant="outline" onClick={handleSaveClick}>
            Save note
            </Button>
            </>
            </Container>
        </div>
    )
}

export default AddNote
