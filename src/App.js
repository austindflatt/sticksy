import './App.css';
import React, { useState } from 'react'
import Notes from './components/Notes';
import Header from './components/Header'
import { Container } from '@mantine/core';

const App = () => {
  const [notes, setNotes] = useState([{
    id: Math.floor(Math.random() * 100000000),
    title: "Note title",
    text: "This is the note text",
    date: "Wed Oct 20 2021"
  }])

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: Math.floor(Math.random() * 100000000),
      title: title,
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

  }
  return (
    <div>
      <Container>
      <Header />
      <Notes 
      notes={notes} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}
      />
      </Container>
    </div>
  )
}

export default App