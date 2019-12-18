import './App.css'

import React, {useState} from 'react'

const NoteForm = () => {
    return (
        <form>
        <label htmlFor="name">Name:</label>
        <input
        id="name"
        type="text"
        name="name"/>

        <label htmlFor="email">Email:</label>
        <input
        id="email"
        type="text"
        name="email"/>
        
        <label htmlFor="name">Role:</label>
        <input
        id="role"
        type="text"
        name="role"/>

            
        </form>
    );
}

export default NoteForm
