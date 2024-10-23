import React from "react";
import Bac from "../imagenes/Bac.jpg";
import { Link } from "react-router-dom";
function Portada() {
  return (
    <div className="container">
      <div className="row">
        <img src={Bac} alt="logo" style={{ maxWidth: "500px" }}></img>
        <div className="mx-auto">
          <p className="text-center">womp womp</p>
        </div>
        <Link to="SignUp">
          <div class="d-grid gap-2 pb-1">
            <button class="btn btn-primary" type="button">
              Regístrate
            </button>
          </div>
        </Link>
        <Link to="LogIn">
          <div class="d-grid gap-2 pb-3">
            <button class="btn btn-primary" type="button">
              Iniciar Sesión
            </button>
          </div>
        </Link>
        <Link to="Editor">
          <div class="d-grid gap-2 pb-1">
            <button class="btn btn-primary" type="button">
              Editor
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Portada;
