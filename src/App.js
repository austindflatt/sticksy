import './App.css';
import React, { useState } from 'react'
import Notes from './components/Notes';

const App = () => {
  const [notes, setNotes] = useState([{
    id: Math.floor(Math.random() * 100000000),
    title: "Note title",
    text: "This is the note text",
    date: "Wed Oct 20 2021"
  }])

  const addNote = (text) => {
    console.log(text);
  }
  return (
    <div>
      <Notes notes={notes} handleAddNote={addNote} />
    </div>
  )
}

export default App