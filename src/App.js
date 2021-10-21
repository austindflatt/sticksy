import './App.css';
import React, { useState } from 'react'
import Notes from './components/Notes';

const App = () => {
  const [notes, setNotes] = useState([{
    id: Math.floor(Math.random() * 100000000),
    noteTitle: "Note title",
    noteText: "This is the note text",
    noteDate: "Wed Oct 20 2021"
  }])
  return (
    <div>
      <Notes />
    </div>
  )
}

export default App
