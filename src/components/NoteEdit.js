'use strict';



import React from 'react';
import {Link} from 'react-router-dom';
import {getNote} from '../lib/helpers';



class NoteEdit extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(location.search.slice(1))
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }


  handleTitle(e) {
    const note = this.state.note;
    note.title = e.target.value;
    this.setState({note});
  }


  handleContent(e) {
    const note = this.state.note;
    note.content = e.target.value;
    this.setState({note});
  }


  updateNote(e) {
    e.preventDefault();
    this.setState({completed: true, editing: true});
    this.props.handler(this.state.note);
  }


  render() {
    const note = this.state.note;
    return (
      <div id='NoteEdit'>
      <table>
      <tbody>
      <tr>
      <th>Title:</th>
      <th>Content</th>
      </tr>
      <tr>
      <td><input id='editTitle' placeholder='Enter new title' type="text" name="title" onChange={this.handleTitle}/></td>
      <td><textarea id='editContent' placeholder='Enter content' rows="5" cols="10" type="text" name="content" onChange={this.handleContent}/></td>
      </tr>
      </tbody>
      </table>
      <button id='submitEdits' type="submit" onClick={this.updateNote}><Link to={`/note/id?${this.state.note.id}`}>Update Note</Link></button>
      <Link id='Cancel' to={`/note/id?${note.id}`}>Cancel</Link>
      </div>
    );
  }
}


export default NoteEdit;
