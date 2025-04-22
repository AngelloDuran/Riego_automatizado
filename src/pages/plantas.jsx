import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CultivoCard = ({ nombre, estado, notificacion }) => (
  <Col xs={12} md={6} lg={4} className="mb-3">
    <Card className="shadow-lg h-100">
      <Card.Body>
        <Card.Title as="h5">{nombre}</Card.Title>
        <Card.Text>Estado: {estado}</Card.Text>
        {notificacion && (
          <div className="d-flex align-items-center mt-2 text-danger">
            <span className="me-2">⚠️</span>
            {notificacion}
          </div>
        )}
      </Card.Body>
    </Card>
  </Col>
);

const Plantas = () => {
  const [cultivos, setCultivos] = useState([
    { nombre: 'Tomates', estado: 'Óptimo', notificacion: '......' },
    { nombre: 'Lechugas', estado: 'Necesita Agua', notificacion: 'Bajo nivel de humedad' },
    { nombre: 'Calabazas', estado: 'Infectado', notificacion: 'Posible plaga detectada' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Revisando el estado de los cultivos...');
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="main-container py-4">
      <h1 className="main-title text-center mb-4">Servicios de Cultivo</h1>
      <Row className="g-3">
        {cultivos.map((cultivo, index) => (
          <CultivoCard key={index} {...cultivo} />
        ))}
      </Row>
    </Container>
  );
};

export default Plantas;
  