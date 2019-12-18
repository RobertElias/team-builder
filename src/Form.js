import './App.css'

import React, {useState} from 'react'

const NoteForm = (props) => {
    const [note, setNote] = useState({
        name: "",
        email: "",
        role: "" 
        })
    const handleChanges = e => {
        setNote({...note, [e.target.name]: e.target.value});
        console.log(e.target.value)
    }
    return (
        <form>
        <label htmlFor="name">Name:</label>
        <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        />

        <label htmlFor="email">Email:</label>
        <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        />
        
        <label htmlFor="name">Role:</label>
        <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        />

        <button type="submit">Add Team Member</button>    
        </form>
    );
}

export default NoteForm
