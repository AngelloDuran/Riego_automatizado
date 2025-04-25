import fondo from './img/img6.jpeg';


import './App.css';  // Asegúrate de tener este import

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Formulario from './Formulario/formulario';
import Plantas from './pages/plantas';
import Servicios from './pages/servicio';
import Noticias from './pages/noticias';
import Soporte from './pages/soporte';
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';


const barData = [
  { name: 'Humedad', value: 65 },
  { name: 'Temperatura', value: 25 },
  { name: 'Agua', value: 80 },
];

const pieData = [
  { name: 'Seco', value: 20 },
  { name: 'Húmedo', value: 80 },
];

const COLORS = ['#0088FE', '#00C49F'];

const Dashboard = ({ nombre }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="container-fluid d-flex justify-content-center flex-column">
        <div
          className="card shadow p-4"
          style={{
            paddingTop: '6rem',
            paddingBottom: '6rem',
            minHeight: '100vh',
          }}
        >
          <div className="card-body">
            <div
              className="card shadow p-4 text-white"
              style={{
                maxWidth: '500px',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.49)',
                borderRadius: '1rem',
                marginTop: '3rem',
              }}
            >
              <div className="card-body text-center">
                <h2 className="mb-4">¡Hola {nombre}!</h2>
                <p className="mb-4">Bienvenido a la aplicación.</p>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <button className="btn btn-green-light" onClick={() => navigate('/plantas')}>Plantas</button>
                  <button className="btn btn-btn btn-green-medium" onClick={() => navigate('/servicios')}>Servicios</button>
                  <button className="btn btn-green-strong" onClick={() => navigate('/noticias')}>Noticias</button>
                  <button className="btn btn-btn btn-green-dark" onClick={() => navigate('/soporte')}>Soporte</button>
                </div>

                {/* GRÁFICAS */}
                <div className="mt-5">
                  <h5 className="text-white mb-3">Estado de sensores</h5>
                  <div className="d-flex justify-content-around flex-wrap">
                    {/* Barra */}
                    <div style={{ width: '100%', height: 250 }}>
                      <ResponsiveContainer>
                        <BarChart data={barData}>
                          <XAxis dataKey="name" stroke="#fff" />
                          <YAxis stroke="#fff" />
                          <Tooltip />
                          <Bar dataKey="value" fill="#82ca9d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Pastel */}
                    <div style={{ width: '100%', height: 300 }}>
                      <ResponsiveContainer>
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                {/* FIN GRÁFICAS */}
                
                

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Tu App.jsx NO SE MODIFICA
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
