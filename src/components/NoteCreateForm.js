'use strict';



import uuid from 'uuid/v1';
import React from 'react';



class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      title: '',
      content: '',
      editing: false,
      completed: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.createNewNote = this.createNewNote.bind(this);
  }


  componentDidMount() {
    console.log('__STATE__', this.state);
  }


  handleChange(e) {
    this.setState({[e.target.name]:e.target.value, editing: true})
  }


  createNewNote(e) {
    e.preventDefault();
    this.setState({completed: true, editing: false});
    this.props.handler(this.state);
  }


  render() {
    return (
      <form id='noteForm' onSubmit={this.createNewNote}>
      <input className='createNoteInput' id='title' placeholder="Note Title" type="text" name="title" onChange={this.handleChange} />
      <textarea className='createNoteInput'id='content' rows="5" cols="20" placeholder="Content" type="text" name="content" onChange={this.handleChange} />
      <button className='createNoteInput' id='submitButton' type="submit">Add Note</button>
      </form>
    )
  }
}



export default NoteCreateForm;
