handleAddCategory
handleUpdateCategory
handleDeleteCategory
//required for action in app


export default connect (mapState, mapDispatch)(Category)
//required to link up in App

import React from 'react'
import { Link } from 'react-router'

//The Header creates links for navigation between routes
const Header = () = (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'><Schedule></Link></li>
      </ul>
    </nav>
  </header>
)


export default Header 
