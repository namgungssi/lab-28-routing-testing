'use strict';



import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import NoteList from './components/NoteList';
import Notes from './components/Notes';
import NoteItem from './components/NoteItem';
import NoteEdit from './components/NoteEdit';

import {removeNote} from './lib/helpers';
import {getAllNotes} from './lib/helpers';
import {updateNote}  from './lib/helpers';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes()
    }

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateState = this.updateState.bind(this);
    this.modifyNote = this.modifyNote.bind(this);
  }

  componentDidMount() {
    console.log('__STATE__', this.state);
  }

  updateState() {
    let notes = getAllNotes();
    this.setState({notes});
  }

  addNote(note) {
    let notes = this.state.notes;
    notes.push(note);
    this.setState({notes})
  }

  modifyNote(note){
    updateNote(note);
    this.updateState();
  }

  deleteNote(id) {
    removeNote(id);
    let current = this.state.notes;
    let notes = current.filter(note => {
      return note.id !== id;
    });
    this.setState({notes});
  }

  render() {
    return (
      <div>
      <Header appTitle="Note App" />
      <Switch>
      <Route exact path='/note/edit/id' component={() =>
        <NoteEdit location={this.props.location} handler={this.modifyNote}/>}/>
        <Route exact path='/note/id' component={NoteItem}/>
        <Route exact path='/' component={() =>
          <main>
          <Notes handler={this.addNote}/>
          <NoteList notes={this.state.notes} handler={this.deleteNote} />
          </main>} />
          </Switch>
          <Footer><p>&copy;2017 Paula Mookerjee</p></Footer>
          </div>
        )
      }
    }

    ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
