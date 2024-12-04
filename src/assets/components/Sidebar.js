import React from 'react';
import DropdownMenu from './DropdownMenu';
import '../css/Sidebar.css';

function Sidebar({ onShowSubcategory, onHideContent, openDropdown, onDropdownToggle }) {
  return (
    <div className="sidebar-container">
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <DropdownMenu
            title={
              <span>
                <i className="bi bi-caret-down-fill"></i> Administración
              </span>
            }
            isOpen={openDropdown === 'administracion'}
            onToggle={() => {
              onDropdownToggle('administracion');
              onHideContent(); // Ocultar contenido activo
            }}
          >
            <li className="nav-item">
              <button className="nav-link">Subárea 1</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Subárea 2</button>
            </li>
          </DropdownMenu>
        </li>
        <hr />
        <li>
          <DropdownMenu
            title={
              <span>
                <i className="bi bi-caret-down-fill"></i> Áreas
              </span>
            }
            isOpen={openDropdown === 'areas'}
            onToggle={() => {
              onDropdownToggle('areas');
              onHideContent(); // Ocultar contenido activo
            }}
          >
            <li className="nav-item">
              <button className="nav-link">Subárea 1</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Subárea 2</button>
            </li>
          </DropdownMenu>
        </li>
        <hr />
        <li>
          <DropdownMenu
            title={
              <span>
                <i className="bi bi-caret-down-fill"></i> Consolidado
              </span>
            }
            isOpen={openDropdown === 'consolidado'}
            onToggle={() => {
              onDropdownToggle('consolidado');
              onHideContent(); // Ocultar contenido activo
            }}
          >
            <li className="nav-item">
              <button className="nav-link">Subárea 1</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Subárea 2</button>
            </li>
          </DropdownMenu>
        </li>
        <hr />
        <li>
          <DropdownMenu
            title={
              <span>
                <i className="bi bi-caret-down-fill"></i> Configuración
              </span>
            }
            isOpen={openDropdown === 'configuracion'}
            onToggle={() => onDropdownToggle('configuracion')}
          >
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onShowSubcategory('Componentes')}
              >
                Componentes
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onShowSubcategory('Normas')}
              >
                Normas
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onShowSubcategory('Acápites y Clasificadores')}
              >
                Acápites y Clasificadores
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onShowSubcategory('Ítem y Sub-ítems')}
              >
                Ítem y Sub-ítems
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => onShowSubcategory('Evaluaciones')}
              >
                Evaluaciones
              </button>
            </li>
          </DropdownMenu>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default Sidebar;
