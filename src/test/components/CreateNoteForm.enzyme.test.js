'use strict';



import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../../components/NoteCreateForm';



describe('<NoteCreateForm />', () => {
  test('can create a new note', () => {
    let title = "Note1";
    let content = "Note1 content";
    let noteCreate = (state) => {
        expect(NoteCreateForm.state().title).toEqual(title);
        expect(NoteCreateForm.state().content).toEqual(content);
    }

    let newNote = shallow(<NoteCreateForm handler={noteCreate} />);
    
    newNote.find("#title").simulate( 'change', { target: {name:"title", value:title} } );
    newNote.find("#content").simulate( 'change', { target: {name:"content", value:content} } );
    newNote.find("#submitButton").simulate( 'submit', { preventDefault:()=>{} } );
  });
});
