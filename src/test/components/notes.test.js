'use strict';



import React from 'react';
import renderer from 'react-test-renderer';
import Notes from '../../components/Notes';



describe('<Notes>', () => {
  test('renders with a clean state', () => {

    let app = {
        state: {
            notes:[]
        },
        setState: (data) => app.state = Object.assign({}, app.state, data)
    }

    const component = renderer.create(
      <Notes app={app} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  test('renders notes with the correct titles', () => {
    let app = {
        state: {
            notes: [
              { title:'Note1', content:'Note1 content'},
              { title:'Note2', content:'Note2 content'}
            ]
        },
        setState: (data) => app.state = Object.assign({}, app.state, data)
    }


    const component = renderer.create(
      <Notes app={app} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
