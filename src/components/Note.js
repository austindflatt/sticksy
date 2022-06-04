import React from 'react'
import { Paper, Title, Text, Space, ActionIcon } from '@mantine/core';
import { FaTrashAlt, FaPen } from 'react-icons/fa';

const Note = ({ id, title, text, date, handleDeleteNote }) => {
    return (
        <div>
            <Paper 
            style={{ whiteSpace: 'pre-wrap', backgroundColor: 'rgb(44 45 51 / 90%)' }} 
            padding="md" 
            shadow="sm" 
            radius="md"
            >
                <Text>
                    <Title order={5}>{title}</Title>
                </Text>
                <Text>
                    {text}
                </Text>
                <Text>
                    Created on {date}
                    <ActionIcon color="red" variant="filled" style={{ float: 'right' }}>
                    <FaTrashAlt onClick={() => handleDeleteNote(id)}/>
                    </ActionIcon>
                    <ActionIcon color="yellow" variant="filled" style={{ float: 'right', marginRight: '10px' }}>
                    <FaPen />
                    </ActionIcon>
                </Text>
            </Paper>
            <Space h="md" />
        </div>
    )
}

export default Note
