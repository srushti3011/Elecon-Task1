import React from 'react';
import './UserList.css'

const Header = () => {
  return (
    <header>
      <h1>List</h1>
      <nav>
        <a href="#" className='header_head'>Dashboard</a> / <a href="#" className='header_head'>User</a> / <a href="#" className='header_head'>List</a>
      </nav>
    </header>
  );
};

export default Header;
