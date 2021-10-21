import React from 'react'
import Note from './Note'
import { SimpleGrid} from '@mantine/core';

const Notes = () => {
    return (
        <div>
            <SimpleGrid cols={3}>
            <Note />
            <Note />
            <Note />
            </SimpleGrid>
        </div>
    )
}

export default Notes
