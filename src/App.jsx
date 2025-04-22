import fondo from'./img/img6.jpeg';

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Formulario from './Formulario/formulario';
import Plantas from './pages/plantas';
import Servicios from './pages/servicio';
import Noticias from './pages/noticias';
import Soporte from './pages/soporte';

const Dashboard = ({ nombre }) => {
  const navigate = useNavigate();
  
    return (
      <section
        
       className="container-fluid d-flex justify-content-center align-items-center vh-100">
       <div className="card shadow p-4" style={{ maxWidth: "5000px", width: "1000%" }}>
       <div className="card-body">      
        <div className="card shadow p-4 text-white"
            style={{
            maxWidth: "500px",
            width: "100%",
            backgroundColor: 'rgba(0, 0, 0, 0.49)', // fondo negro semitransparente para la tarjeta
            borderRadius: '1rem' // bordes redondeados
            }}
        >
          <div className="card-body text-center">
            <h2 className="mb-4">¡Hola {nombre}!</h2>
            <p className="mb-4">Bienvenido a la aplicación.</p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <button className="btn-outline-success" onClick={() => navigate('/plantas')}>Plantas</button>
              <button className="btn btn-info" onClick={() => navigate('/servicios')}>Servicios</button>
              <button className="btn btn-warning" onClick={() => navigate('/noticias')}>Noticias</button>
              <button className="btn btn-danger" onClick={() => navigate('/soporte')}>Soporte</button>
            </div>
          </div>
        </div>
        </div>
        </div>

      </section>
    );
  };
  


export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [nombre, setNombre] = useState('');

  return (
    <Routes>
      {!loggedIn ? (
        <Route
          path="*"
          element={
            <Formulario
              onLogin={() => setLoggedIn(true)}
              setNombre={setNombre}
            />
          }
        />
      ) : (
        <>
          <Route path="/" element={<Dashboard nombre={nombre} />} />
          <Route path="/plantas" element={<Plantas />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/soporte" element={<Soporte />} />
        </>
      )}
    </Routes>
  );
};

export default App;
