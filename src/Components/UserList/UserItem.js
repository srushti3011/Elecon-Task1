import React from 'react';
import StatusBadge from './StatusBadge';
import './UserList.css'

const UserItem = ({ user }) => {
  return (
    <tr>
      <td><input type="checkbox" /></td>
      <td>{user.name}<br /><span>{user.email}</span></td>
      <td>{user.phone}</td>
      <td>{user.company}</td>
      <td>{user.role}</td>
      <td><StatusBadge status={user.status} /></td>
    </tr>
  );
};

export default UserItem;