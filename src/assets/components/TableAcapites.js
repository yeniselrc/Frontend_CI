import React, { useState } from 'react';
import '../css/Table.css';

const TablaComponentes = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (rowIndex) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(rowIndex)
        ? prevSelectedRows.filter((index) => index !== rowIndex) // Deseleccionar fila
        : [...prevSelectedRows, rowIndex] // Seleccionar fila
    );
  };

  const isRowSelected = (rowIndex) => selectedRows.includes(rowIndex);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>No</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, rowIndex) => (
            <tr
              key={rowIndex}
              className={isRowSelected(rowIndex) ? 'selected-row' : ''}
            >
              <td>
                <input
                  type="checkbox"
                  checked={isRowSelected(rowIndex)}
                  onChange={() => handleCheckboxChange(rowIndex)}
                />
              </td>
              <td>{rowIndex + 1}</td>
              <td>Nombre {rowIndex + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaComponentes;
