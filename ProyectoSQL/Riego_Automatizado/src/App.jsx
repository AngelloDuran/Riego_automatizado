import React, { useState, useEffect } from 'react';
import './App.css';
import fondo from './img/img5.gif';
// Componente Card
export const Card = ({ className, children }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);
// Componente CardContent
export const CardContent = ({ children }) => (
  <div className="mt-2">
    {children}
  </div>
);

// Componente Button
export const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="custom-button">
    {children}
  </button>
);


// App principal
export const CultivoCard = ({ nombre, estado, notificacion }) => (
  <Card className="p-4 m-2 shadow-lg">
    <CardContent>
      <h2 className="text-xl font-bold">{nombre}</h2>
      <p className="text-base">Estado: {estado}</p>
      {notificacion && (
        <div className="flex items-center mt-2 text-red-600">
          <span className="mr-2">⚠️</span>
          {notificacion}
        </div>
      )}
    </CardContent>
  </Card>
);

export const App = () => {
  const [cultivos, setCultivos] = useState([
    { nombre: 'Temperatura', estado: 'Óptimo', notificacion: '' },
    { nombre: 'Nivel de agua ', estado: 'Necesita Agua', notificacion: 'Bajo nivel de humedad' },
    { nombre: 'Panel de inicio', estado: 'Infectado', notificacion: 'Posible plaga detectada' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Revisando el estado de los cultivos...');
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const enviarNotificacion = (mensaje) => {
    alert(mensaje);
  };
  const enviarServicio = (mensaje)=>{
    alert(mensaje);

  };
  return (
    <div className="main-container">
      <section className='contenido'>
    
      <h1 className="main-title">Cuidado y Riego Automatizado</h1>
      
      <div className="button-group">
        <Button onClick={() => enviarNotificacion('Revisión completa')}>PLANTAS</Button>  
        <Button onClick={() => enviarServicio('Esta es la nueva página')}>SERVICIOS</Button>
        <Button onClick={() => enviarNoticias('nueva')}>NOTICIAS</Button>
        <Button onClick={() => enviarNoticias('nueva')}>SOPORTE</Button>
      
      </div>
      </section>
    
      <div className="grid-container">
        {cultivos.map((cultivo, index) => (
          <CultivoCard key={index} {...cultivo} />
        ))}
      </div>
  
    </div>
  );
}

export default App;
