import React from 'react'
import { TextInput, Space } from '@mantine/core';
import { BiSearchAlt } from 'react-icons/fa';

const Search = () => {
    return (
        <div>
            <TextInput
            placeholder="Search"
            variant="unstyled"
            size="lg"
            rightSectionWidth={90}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            />
            <Space h="md" />
        </div>
    )
}

export default Search
