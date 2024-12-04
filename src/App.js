//import logo from './assets/images/logo.svg';
import './assets/css/login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


// Importar Componentes
import Signin from './assets/components/Signin.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InterfazPrincipal from './assets/components/InterfazPrincipal.js';  // La nueva interfaz en blanco

function App() {
  return (
    <Router>
      <header> 
        <div className="App-header">
          
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/blank" element={<InterfazPrincipal />} />  {/* Ruta de la interfaz principal */}
      </Routes>
    </Router>
  );
}

export default App;
