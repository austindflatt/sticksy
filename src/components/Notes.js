import React from 'react'
import Note from './Note'
import { SimpleGrid, Container } from '@mantine/core';

const Notes = ({ notes }) => {
    return (
        <div>
            <Container>
            <SimpleGrid cols={3}>
            {notes.map((note) => ( 
                <Note id={note.id} title={note.title} text={note.text} date={note.date} />
            ))}
            </SimpleGrid>
            </Container>
        </div>
    )
}

export default Notes
