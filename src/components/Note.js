import React from 'react'
import { Paper , Text, Space } from '@mantine/core';

const Note = ({ id, title, text, date }) => {
    return (
        <div>
            <Paper padding="md" shadow="sm" radius="md">
                <Text>{title}</Text>
                <Text>
                    {text}
                </Text>
                <Text>
                    {date} / delete
                </Text>
            </Paper>
            <Space h="md" />
        </div>
    )
}

export default Note
