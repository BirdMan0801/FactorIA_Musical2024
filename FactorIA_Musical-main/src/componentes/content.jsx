import React from "react";
import logo from "../imagenes/logo.png";
import cursos from "../imagenes/cursos.jpg";
import { LuSchool } from "react-icons/lu";

function Cursosinicial() {
  return (
    <div className="container">
      <h1 className="text-center my-4">FactorIA Musical</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card">
            <img src={ChurchOrgan} className="card-img-top" alt="Course 1" />
            <div className="card-body">
              <p><small><LuSchool/>FactorIA Musical</small></p>
              <h4 className="card-title">FactorIA Musical</h4>
              <p className="card-text">
                <small>Este es un estudio virtual de música con IA integrada!</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={ChurchOrgan} className="card-img-top" alt="Course 2" />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">
                Prueba nuestro estudio virtual de música con IA.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Recuerda</h5>
              <p className="card-text">
                La retroalimentacion es importante para mejorar la experiencia que tienes al utilizar esta pagina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cursosinicial;
