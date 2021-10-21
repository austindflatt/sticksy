import React from 'react'
import { Paper , Text, Space } from '@mantine/core';

const Note = () => {
    return (
        <div>
            <Paper padding="md" shadow="sm" radius="md">
                <Text>Note Title</Text>
                <Text>
                    Note Text
                </Text>
                <Text>
                    Wed Oct 20th 2021 / delete
                </Text>
            </Paper>
            <Space h="md" />
        </div>
    )
}

export default Note
