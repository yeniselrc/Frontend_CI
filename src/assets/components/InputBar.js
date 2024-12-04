// InputBar.js
import React from 'react';
import '../css/InputBar.css';

const InputBar = ({ fields, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="input-bar-container">
      {fields.map((field, index) => (
        <div key={index} className="input-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type || 'text'}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder || ''}
            required={field.required || false}
          />
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default InputBar;
