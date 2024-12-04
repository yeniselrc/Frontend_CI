import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Xabal from '../images/Xabal.png';
import '../css/Signin.css'; 

function Signin() {
  const navigate = useNavigate();

  const handleInterfazPrincipal = (event) => {
    event.preventDefault(); // Previene el envío del formulario
    navigate('/blank');  // Navegar a la interfaz Principal
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-5 bg-body-tertiary text-bg-dark">
      <div className="form-container"> {/* Contenedor semitransparente */}
        <main className="form-signin w-100 m-auto">
          <form onSubmit={handleInterfazPrincipal}>
            <img className="mb-4" src={Xabal} alt="" width="290" height="57" />

            <div className="form-floating mb-3">
              <input type="usuario" className="form-control" id="floatingInput" placeholder="nombre" />
              <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating mb-3">
              <input type="contraseña" className="form-control" id="floatingPassword" placeholder="contraseña" />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="recordarme" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Recordarme
              </label>
            </div>
            <button className="btn btn-danger w-100 py-2" onClick={handleInterfazPrincipal} type="submit">
              Entrar
            </button>

            <p className="mt-5 mb-0 pt-5 text-body-secondary">
              &copy; Universidad de las Ciencias Informáticas.
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default Signin;
