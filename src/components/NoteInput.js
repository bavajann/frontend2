import React, { useState } from 'react';
import { createNote } from '../services/noteService';

const NoteInput = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (text.trim()) {
            await createNote(text);
            onAdd();
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter note"
            />
            <button type="submit">Add Note</button>
        </form>
    );
};

export default NoteInput;
