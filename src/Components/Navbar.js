import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div>
        <ul>
            <li>
                <Link className='links' to={'/login'}>Login</Link>
            </li>
            <li>
                <Link className='links' to={'/signup'}>Sign Up</Link>
            </li>
            <li>
                <Link className='links' to={'/createuser'}>Create User</Link>
            </li>
            <li>
                <Link className='links' to={'/deleteuser'}>Delete User</Link>
            </li>
            <li>
                <Link className='links'>User Cards</Link>
            </li>
            <li>
                <Link className='links' to={'/userlist'}>User List</Link>
            </li>
            <li>
                <Link className='links' to={'/userprofile'}>User Profile</Link>
            </li>
            <li>
                <Link className='links' to={'/editprofile'}>Edit Profile</Link>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
