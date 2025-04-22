import { useState } from "react";
import "./Formulario.css";

export function Formulario({ onLogin, setNombre }) {
  const [nombreInput, setNombreInput] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombreInput && password) {
      setNombre(nombreInput);
      onLogin();
    } else {
      alert("Completa todos los campos.");
    }
  };

  return (
    <section className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body">
          <h2 className="text-center mb-4 text-white">Iniciar Sesión</h2>
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
              <button className="btn btn-primary">Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Formulario;
