'use strict';



export const renderIf = (test, component) => {
    return test ? component : undefined
}

export const saveNote = (note) => {
    let notes = getAllNotes();
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
}

export const getNote = (id) => {
  let notes = getAllNotes();
  let note = notes.filter(note => note.id === id);
  return note[0];
}

export const removeNote = (id) => {
  let notes = getAllNotes();
  let updatedNotes = notes.filter(note => {
    return note.id !== id;
  })
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
}

export const updateNote = (updatedNote) => {
  let current = getAllNotes();
  let updated = current.filter(note => delete note.id === updatedNote.id)
  updated.push(updatedNote);
  localStorage.setItem("notes", JSON.stringify(updated));
}

export const getAllNotes = () => {
  return JSON.parse(localStorage.getItem("notes") || "[]");
