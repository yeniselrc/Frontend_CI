// Navbar.js
import React from 'react';
import '../css/Navbar.css';


const Navbar = ({ onActivateInputBar }) => {


  

  return (
    <div className="navbar-container">
      <div className="icons-group">
        <i
          className="bi bi-file-earmark-plus-fill"
          onClick={() => onActivateInputBar()}
        ></i>
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash"></i>
      </div>
      <input
        type="text"
        placeholder="Buscar componentes..."
        className="search-input"
      />
      <button className="search-button">Buscar</button>
    </div>
  );
};

export default Navbar;
