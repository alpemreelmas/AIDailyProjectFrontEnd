'use client'
import React, { useState } from 'react';
import CreateNote from "@/src/components/createNote";
import EditNote from '@/src/components/editNote';

function Notes() {
    const [notes, setNotes] = useState<Array<any>>([]);
    const [editedNoteId, setEditedNoteId] = useState<number | null>(null);
    const [editedNoteContent, setEditedNoteContent] = useState<string>('');

    const addNote = (content: string) => {
        const newNote = {
            id: notes.length + 1,
            content: content
        };
        setNotes([...notes, newNote]);
    };

    const editNote = (id: number, content: string) => {
        setEditedNoteId(id);
    };

    const saveEditedNote = (content: string) => {
        const updatedNotes = notes.map(note => {
            if (note.id === editedNoteId) {
                return { ...note, content: content };
            }
            return note;
        });
        setNotes(updatedNotes);
        setEditedNoteId(null);
        setEditedNoteContent('');
    };

    const deleteNote = (id: number) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
    };

    return (
        <div style={{ margin: "15px 15px 50px" }}>
            <CreateNote addNote={addNote} />

            {notes.length === 0 ? (
                <p>No notes available. Create a new note to get started!</p>
            ) : (
                <>
                    <h6>05.04.2024</h6>
                    <ul className="list-group">
                        {notes.map(note => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={note.id}>
                                <span>{note.content}</span>

                                <div style={{ display: 'flex' }}>
                                    <EditNote
                                        content={note.content}
                                        editNote={editNote}
                                    />
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteNote(note.id)} style={{ marginLeft: 10 }}>
                                        <i className='icon-trash'></i>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default Notes;
