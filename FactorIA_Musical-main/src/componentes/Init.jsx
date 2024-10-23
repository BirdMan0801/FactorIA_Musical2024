import React from "react";
import "../estilos/index.css";
import {Link} from "react-router-dom";
function Init() {
  return (
    <div className="app">
      <header className="header">
        <div className="login-section">
          <h2>Iniciar Sesión</h2>
          <form>
            <div>
              <label>Usuario:</label>
              <input type="text" name="myexample@tucorreo.com"></input>
            </div>
            <div>
              <label>Contraseña:</label>
              <input type="password" name="password"></input>
              <Link to="/Inicio_Sesion"> <button type="submit">Iniciar Sesión</button></Link>
            </div>
          </form>
        </div>
        <div className="info-section">
          <h2>Información de la página</h2>
          <p>Aquí va más información sobre la página: </p>
        </div>
      </header>
      <footer className="footer">
        <h2>Más información:</h2>
        <p>Acerca de nosotros</p>
      </footer>
    </div>
  );
}
export default Init;
