import React from 'react'
import Note from './Note'
import AddNote from './AddNote';
import { SimpleGrid } from '@mantine/core';

const Notes = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div>
            <AddNote handleAddNote={handleAddNote} />
            <SimpleGrid 
            cols={3}
            breakpoints={[
                { maxWidth: 'md', cols: 3, spacing: 'md' },
                { maxWidth: 'sm', cols: 2, spacing: 'sm' },
                { maxWidth: 'xs', cols: 1, spacing: 'sm' },
              ]}
            >
            {notes.map((note) => ( 
                <Note 
                id={note.id} 
                title={note.title} 
                text={note.text} 
                date={note.date}
                handleDeleteNote={handleDeleteNote}
                />
            ))}
            </SimpleGrid>
        </div>
    )
}

export default Notes
