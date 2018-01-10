'use strict';



import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';



class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(e) {
    e.preventDefault();
    let id = e.target.dataset['key'];
    this.props.handler(id)
  }

  render() {
    const {notes} = this.props;
    return (
      <div id="noteList">
      { notes.map((note, i) => {
        return(
          <ul>
          <li key={i}><a className='noteLinks' id='deleteButton' onClick={this.delete} data-key={note.id} href="#">Delete</a></li>
          <li key={note.id}><Link className='notelinks' to={`/note/id?${note.id}`}>{note.title}</Link></li>
          </ul>
        )
      })}
      </div>
    );
  }
}



export default NoteList;
