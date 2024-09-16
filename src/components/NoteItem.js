import React from 'react';

const NoteItem = ({ note, onDelete }) => {
    return (
        <div>
            <span>{note.text}</span>
            <button onClick={() => onDelete(note._id)}>Delete</button>
        </div>
    );
};

export default NoteItem;
