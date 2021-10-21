import React from 'react'
import Note from './Note'
import { SimpleGrid, Container } from '@mantine/core';

const Notes = ({ notes }) => {
    return (
        <div>
            <Container>
            <SimpleGrid cols={3}>
            {notes.map((note) => ( 
                <Note /> 
            ))}
            </SimpleGrid>
            </Container>
        </div>
    )
}

export default Notes
