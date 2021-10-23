import React from 'react'
import { TextInput, Space } from '@mantine/core';
import { BiSearchAlt } from 'react-icons/fa';

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
