import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => (
  <nav>
    <div className='nav-wrapper cyan darken-1'>
      <Link to='/home' className='brand-logo center'>Movies and TV!</Link>
      <ul id='nav-mobile' className='left hide-on-sm-and-down'>
        <li><Link to='/friends'>Friends</Link></li>
        <li><Link to='/lists'>Lists</Link></li>
        <li><Link to='/shelves'>Shelves</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
      <div className='input-field col s4 right' style={Style.container}>
        <i className='material-icons prefix'>search</i>
        <input placeholder='Search...' id='Search' type='text' />
      </div>
    </div>
  </nav>
)

const Style = {
  container: {
    marginRight: 15
  }
}