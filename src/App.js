import React from 'react';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <h1 className='h1'>Notes by Bavajann</h1>
            <NoteList />
        </div>
    );
};

export default App;
