import './App.css';

import React, {useState} from 'react';

import NoteForm from './Form';
import logo from './logo.svg';

function App() {
  
  const [notes, setNotes] = useState([
    {
      id: 0,
      name: "Robert Elias",
      email: "WebDevRob@gmail.com",
      role: "Web Developer"
    },
    
    {
      id: 1,
      name: "John Smith",
      email: "JohnSmith@gmail.com",
      role: "Product Manager"
    }
  ])
  
  const Form = props => {
    return (
      <div className="note-list">
      {props.notes.map(note => (
        <div className="note" key={note.id}>
        <p>Name: {note.name}</p>
        <p>Email: {note.email}</p>
        <p>Role: {note.role}</p>
        </div>
      ))}
      </div>
    );
  };
  
  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      name: note.name,
      email: note.email,
      role: note.role
    };
    setNotes([...notes, newNote])
  };
  
  return (
    <div className="App">
     <h1>My Team</h1>
     <NoteForm addNewNote={addNewNote}/>
     <Form notes={notes}/>
    </div>
  );
}

export default App;
