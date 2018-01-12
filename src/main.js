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

import {removeNote} from './lib/helpers';
import {getAllNotes} from './lib/helpers';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes()
    }

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }


  componentDidMount() {
    console.log('__STATE__', this.state);
  }


  addNote(note) {
    let notes = this.state.notes;
    notes.push(note);
    this.setState({notes})
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
      <Route path='/note/id' component={NoteItem}/>
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
