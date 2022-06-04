import './App.css';
import React, { useState, useEffect } from 'react'
import Notes from './components/Notes';
import Header from './components/Header'
import Search from './components/Search';
import { Container } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

const App = () => {
  const [notes, setNotes] = useState([]);

  const [searchCriteria, setSearchCriteria] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data')
    );
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

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
      <MantineProvider theme={{ colorScheme: 'dark' }}>
      <Container size="lg">
      <Header />
      <Search handleSearchNote={setSearchCriteria} />
      <Notes 
      notes={notes.filter((note) => note.text.toLowerCase().includes(searchCriteria))}
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}
      />
      </Container>
      </MantineProvider>
    </div>
  )
}

export default App