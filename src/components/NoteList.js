import React, { useEffect, useState } from 'react';
import { fetchNotes, deleteNote } from '../services/noteService';
import NoteItem from './NoteItem';
import NoteInput from './NoteInput';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const loadNotes = async () => {
            const notes = await fetchNotes();
            setNotes(notes);
        };
        loadNotes();
    }, []);

    const handleAdd = async () => {
        const notes = await fetchNotes();
        setNotes(notes);
    };

    const handleDelete = async (id) => {
        await deleteNote(id);
        const notes = await fetchNotes();
        setNotes(notes);
    };

    return (
        <div>
            <NoteInput onAdd={handleAdd} />
            <div>
                {notes.map(note => (
                    <NoteItem key={note._id} note={note} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default NoteList;
