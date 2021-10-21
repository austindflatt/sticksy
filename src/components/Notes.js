import React from 'react'
import Note from './Note'
import { SimpleGrid, Container } from '@mantine/core';

const Notes = () => {
    return (
        <div>
            <Container>
            <SimpleGrid cols={3}>
            <Note />
            <Note />
            <Note />
            </SimpleGrid>
            </Container>
        </div>
    )
}

export default Notes
