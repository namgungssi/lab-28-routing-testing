import React from 'react';
import {Link} from 'react-router-dom';
import {getNote} from '../lib/helpers';



class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(this.props.location.search.slice(1))
    }
  }
  

  render() {
    console.log(this.state.note);
    return (
      <div id='NoteItem'>
      <Link id='backButton' to="/">Back</Link>
      <table>
      <tbody>
      <tr>
      <th>Title:</th>
      <th>Content</th>
      </tr>
      <tr>
      <td>{this.state.note[0].title}</td>
      <td>{this.state.note[0].content}</td>
      </tr>
      </tbody>
      </table>
      </div>
    )
  }
}



export default NoteItem;
