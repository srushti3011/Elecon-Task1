import React from 'react';
import UserItem from './UserItem';
import './UserList.css'

const UserList = ({ users }) => {
  return (
    <table className='list-table'>
      <thead>
        <tr>
          <th className='list-head'></th>
          <th className='list-head'>Name</th>
          <th className='list-head'>Phone Number</th>
          <th className='list-head'>Company</th>
          <th className='list-head'>Role</th>
          <th className='list-head'>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </tbody>
    </table>
  );
};
export default UserList;