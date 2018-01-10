'use strict';



export const renderIf = (test, component) => {
  return test ? component: undefined
}


export const saveNote = (note) => {
  let notes = getAllNotes();
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}


export const getNote = (id) => {
  let notes = getAllNotes();
  return notes.filter(note => note.id === id);
}


export const removeNote = (id) => {
  let notes = getAllNotes();
  let updatedNotes = notes.filter(note => {
    return note.id !== id;
  })
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
}


export const getAllNotes = () => {
  return JSON.parse(localStorage.getItem("notes") || "[]");
}
