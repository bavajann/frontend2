import React from 'react';

const NoteItem = ({ note, onDelete }) => {
    return (
        <div className="note-item">
            <span>{note.text}</span>
            <button onClick={() => onDelete(note._id)}>Delete</button>
        </div>
    );
};

export default NoteItem;
