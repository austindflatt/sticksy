import React, { useState } from 'react'
import { Textarea, Button, Container } from '@mantine/core';

const AddNote = ({ handleAddNote }) => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
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
            <p>{characterLimit - noteText.length} remaining</p>
            <Button variant="outline" onClick={handleSaveClick}>
            Save note
            </Button>
            </>
            </Container>
        </div>
    )
}

export default AddNote
