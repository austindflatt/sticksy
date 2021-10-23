import React from 'react'
import { Paper , Text, Space } from '@mantine/core';

const Note = ({ id, title, text, date, handleDeleteNote }) => {
    return (
        <div>
            <Paper style={{ whiteSpace: 'pre-wrap' }} padding="md" shadow="sm" radius="md">
                <Text>{title}</Text>
                <Text>
                    {text}
                </Text>
                <Text>
                    {date} / <button onClick={() => handleDeleteNote(id)}>delete</button>
                </Text>
            </Paper>
            <Space h="md" />
        </div>
    )
}

export default Note
