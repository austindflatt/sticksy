import React from 'react'
import { Paper, Title, Text, Space, ActionIcon } from '@mantine/core';
import { FaTrashAlt } from 'react-icons/fa';

const Note = ({ id, title, text, date, handleDeleteNote }) => {
    return (
        <div>
            <Paper style={{ whiteSpace: 'pre-wrap', backgroundColor: '#feffc6' }} padding="md" shadow="sm" radius="md">
                <Text>
                    <Title order={5}>{title}</Title>
                </Text>
                <Text>
                    {text}
                </Text>
                <Text>
                    {date}
                    <ActionIcon color="red" variant="filled">
                    <FaTrashAlt onClick={() => handleDeleteNote(id)}/>
                    </ActionIcon>
                </Text>
            </Paper>
            <Space h="md" />
        </div>
    )
}

export default Note
