import React from 'react'
import { TextInput } from '@mantine/core';

const Search = ({ handleSearchNote, notes }) => {

    return (
        <div>
            <TextInput
            placeholder="Search"
            variant="unstyled"
            size="lg"
            onChange={(event) => handleSearchNote(event.target.value)}
            />
        </div>
    )
}

export default Search
