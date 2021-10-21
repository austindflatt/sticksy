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
  return (
    <div>
      <Notes notes={notes} />
    </div>
  )
}

export default App