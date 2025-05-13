import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Formulario({ setNombre }) {
  const [nombreInput, setNombreInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombreInput || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: nombreInput,
          password: password,
        }),
        credentials: 'include',
      });

      const data = await response.json();

      console.log('Login Response:', data); // Agregamos el log para ver la respuesta

      if (data && data.success) {
        setNombre(nombreInput);
        navigate(data.redirect);
      } else {
        setError(data?.message || 'Error en el inicio de sesión.');
      }
    } catch (err) {
      setError('Error de conexión con el servidor.');
      console.error('Fetch Error:', err); // Log del error de fetch
    }
  };

  return (
    <section className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h2 className="text-center mb-4 text-white">Iniciar Sesión</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                value={nombreInput}
                onChange={(e) => setNombreInput(e.target.value)}
                placeholder="Nombre de usuario"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="form-control"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Formulario;