import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import TablaComponentes from './Table';
import TablaNormas from './TableNormas';
import TablaAcapites from './TableAcapites';
import TablaItems from './TableItems';
import TablaEvaluaciones from './TableEvaluaciones';
import Navbar from './Navbar';
import InputBar from './InputBar';

const InterfazPrincipal = () => {
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const [openDropdown, setOpenDropdown] = useState('');
  const [showInputBar, setShowInputBar] = useState(false);

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? '' : dropdownName));
  };

  const handleShowSubcategory = (subcategory) => {
    setActiveSubcategory(subcategory);  // Asegúrate de que esto tenga el valor correcto
    setShowInputBar(false); // Asegura que InputBar no esté visible al inicio
  };

  const handleHideContent = () => {
    setActiveSubcategory('');
    setShowInputBar(false);
  };

  const handleActivateInputBar = () => {
    setShowInputBar(true);
  };

  const handleInputBarSubmit = (data) => {
    console.log('Datos ingresados:', data);
    setShowInputBar(false); // Cierra la barra después de enviar los datos
  };

  const inputFieldsBySubcategory = {
    Componentes: [
      { name: 'nombre', label: 'Nombre del Componente', required: true },
      { name: 'descripcion', label: 'Descripción', type: 'text' },
    ],
    Normas: [
      { name: 'codigo', label: 'Nombre de la Norma', required: true },
      { name: 'titulo', label: 'Componente', type: 'text' },
    ],
    'Acápites y Clasificadores': [
      { name: 'nombre', label: 'Nombre del Acapite', required: true },
    ],
    'Ítem y Sub-ítems': [
      { name: 'nombre', label: 'Nombre del Item', required: true },
      { name: 'descripcion', label: 'Norma', type: 'text' },
    ],
    Evaluaciones: [
      { name: 'nombre', label: 'Nombre de la Evaluacion', required: true },
      { name: 'descripcion', label: 'Siglas', type: 'text' },
    ]
  };

  return (
    <div>
      <Header />
      <Sidebar
        onShowSubcategory={handleShowSubcategory}
        onHideContent={handleHideContent}
        openDropdown={openDropdown}
        onDropdownToggle={handleDropdownToggle}
      />
      <div className="content">
        {showInputBar ? (
          <InputBar
            fields={inputFieldsBySubcategory[activeSubcategory] || []}  // Verifica si activeSubcategory tiene el valor correcto
            onSubmit={handleInputBarSubmit}
          />
        ) : (
          <>
            {activeSubcategory === 'Componentes' && (
              <div className="componentes-section">
                <Navbar onActivateInputBar={handleActivateInputBar} />
                <TablaComponentes />
              </div>
            )}
            {activeSubcategory === 'Normas' && (
              <div className="normas-section">
                <Navbar onActivateInputBar={handleActivateInputBar} />
                <TablaNormas />
              </div>
            )}
            {activeSubcategory === 'Acápites y Clasificadores' && (
              <div className="acapites-section">
                <Navbar onActivateInputBar={handleActivateInputBar} />
                <TablaAcapites />
              </div>
            )}
            {activeSubcategory === 'Ítem y Sub-ítems' && (
              <div className="items-section">
                <Navbar onActivateInputBar={handleActivateInputBar} />
                <TablaItems />
              </div>
            )}
            {activeSubcategory === 'Evaluaciones' && (
              <div className="evaluaciones-section">
                <Navbar onActivateInputBar={handleActivateInputBar} />
                <TablaEvaluaciones />
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default InterfazPrincipal;
