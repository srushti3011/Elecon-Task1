import { useState } from "react"
import React from 'react'
import './DeleteUser.css'

const initialUsers = [
    { id: 1, name: 'Janki', email: 'janki@example.com', phone: '123-456-7890', city: 'Anand' },
    { id: 2, name: 'Jiya', email: 'jiya@example.com', phone: '987-654-3210', city: 'Anand' },
    { id: 3, name: 'Rahi', email: 'rahi@example.com', phone: '987-654-3210', city: 'Anand' },
    { id: 4, name: 'Shree', email: 'shree@example.com', phone: '987-654-3210', city: 'Anand' },
    { id: 5, name: 'Honey', email: 'honey@example.com', phone: '987-654-3210', city: 'Anand'},
  ];

const DeleteUser = () => {
    const [users, setUsers] = useState(initialUsers);
    const [selectAll, setSelectAll] = useState(false);
  
    const handleDelete = (id) => {
      setUsers(users.filter(user => user.id !== id));
    };
  
    const handleSelectAll = () => {
      setSelectAll(!selectAll);
      setUsers(users.map(user => ({ ...user, isSelected: !selectAll })));
    };
  
    const handleSelectUser = (id) => {
      setUsers(users.map(user => 
        user.id === id ? { ...user, isSelected: !user.isSelected } : user
      ));
    };
  
    const handleDeleteSelected = () => {
      setUsers(users.filter(user => !user.isSelected));
    };
  
    return (
      <div className="container">
        <h1 className="delete_heading">Deletion Table</h1>
        <table id="userTable">
          <thead>
            <tr>
              <th><input type="checkbox" checked={selectAll} onChange={handleSelectAll} /></th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td><input type="checkbox" checked={user.isSelected || false} onChange={() => handleSelectUser(user.id)} /></td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.city}</td>
                <td><span className="delete" onClick={() => handleDelete(user.id)}>🗑️</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDeleteSelected} className="delete_button">Delete Selected</button>
      </div>
    );
}

export default DeleteUser
