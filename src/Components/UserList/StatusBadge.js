import React from 'react';
import './UserList.css'

const StatusBadge = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'badge-active';
      case 'Pending':
        return 'badge-pending';
      case 'Banned':
        return 'badge-banned';
      case 'Rejected':
        return 'badge-rejected';
      default:
        return 'Status';
    }
  };

  // return <span className={badge ${get Status Class (Status)}> Status </span>;
  return <span> {getStatusClass(status)} </span>;
};

export default StatusBadge;
