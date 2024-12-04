import React from 'react';
import '../css/Header.css';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="overlay"></div>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img 
            src= {logo} 
            alt="Logo" 
            className="logo me-2" 
            style={{ width: '45px', height: '40px' }} 
          />
          <span className="fs-4">Control Interno</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item"><button className="nav-link active" aria-current="page">Agenda</button></li>
          <li className="nav-item"><button className="nav-link">Personal</button></li>
          <li className="nav-item"><button className="nav-link">Archivo</button></li>
          <li className="nav-item"><button className="nav-link">Notificaciones</button></li>
          <li className="nav-item"><button className="nav-link">Acerca de</button></li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
