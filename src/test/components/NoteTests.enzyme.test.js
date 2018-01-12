import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';
import NoteCreateForm from '../../components/NoteCreateForm';
import NoteList from '../../components/NoteList';


describe('<NoteCreateForm />', () => {
  test('can create a new note', () => {

    let title = "Note1";
    let content = "Note1 content";
    let title2 = "Note2";
    let content2 = "Note2 content";
    let notes = [];

    let noteCreate = (state) => {
      expect(NoteCreateForm.state().title).toEqual(title);
      expect(NoteCreateForm.state().content).toEqual(content);
    }

    const component = shallow(<NoteCreateForm handler={noteCreate} />);

    component.find("#title").simulate( 'change', { target: {name:"title", value:title} } );
    component.find("#content").simulate( 'change', { target: {name:"content", value:content} } );
    component.find("#submitButton").simulate( 'submit', { preventDefault:()=>{notes.push({name, value})} } );

    component.find('#title').simulate('change', {target: {name:title, value:title2 }});
    component.find("#content").simulate( 'change', { target: {name:"content", value:content2} } );
    component.find("#submitButton").simulate( 'submit', { preventDefault:()=>{notes.push({name, value})} } );
  });
});
