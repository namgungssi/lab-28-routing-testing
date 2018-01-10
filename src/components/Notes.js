'use strict';



import React from 'react';
import NoteForm from './NoteCreateForm';
import {saveNote} from '../lib/helpers';



class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewNote = this.handleNewNote.bind(this);
  }

  componentDidMount() {
    console.log("__E_STATE__", this.state);
  }

  handleNewNote(note) {
    saveNote(note);
    this.props.handler(note):
    location.reload();
  }

  render() {
    return (
      <div id="noteWrapper">
        <h3>Create Note</h3>
        <NoteForm handler={this.handleNewNote}/>
        </div>
    );
  }
}


export default Notes;
