import React, { useState } from 'react'
import { TextInput, Textarea, Text, Button, Space, Divider } from '@mantine/core';

const AddNote = ({ handleAddNote }) => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteText, setNoteText] = useState("");
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }
    const handleTitleChange = (event) => {
        setNoteTitle(event.target.value);
    }
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText, noteTitle);
            setNoteText('');
            setNoteTitle('');

        }
    }
    return (
        <div>
            <Divider />
            <TextInput
            placeholder="Give your note a title"
            variant="unstyled"
            size="xl"
            required
            value={noteTitle}
            onChange={handleTitleChange}
            />
            <Textarea
            placeholder="Type what you want to have on your note"
            variant="unstyled"
            size="lg"
            required
            value={noteText}
            onChange={handleChange}
            />
            
            <>
            <Button variant="light" color="violet" onClick={handleSaveClick}>
            Create note
            </Button>
            <Text style={{ float: 'right' }}>{characterLimit - noteText.length} characters left</Text>
            <Space h="md" />
            <Divider />
            <Space h="md" />
            </>
        </div>
    )
}

export default AddNote
