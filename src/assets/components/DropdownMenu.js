import React from 'react';

const DropdownMenu = ({ title, isOpen, onToggle, children }) => {
  return (
    <li>
      <button className="nav-link" onClick={onToggle}>
        {title}
      </button>
      {isOpen && (
        <ul className="nav flex-column ms-3">
          {children}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
