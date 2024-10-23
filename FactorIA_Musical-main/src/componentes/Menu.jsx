import React from "react";

function Menu() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i>FactorIA Musical</i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/LogIn">
                  Iniciar Sesión
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/SignUp">
                  Registrarse
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Reproductor">
                  Reproductor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/Editor">
                  Editor
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="¿Que tonalidad prefieres hoy?"
            aria-label="Search"
          />
          <button type="button" class="btn btn-primary">
            Buscar
          </button>
        </form>
      </div>
      <div className="p-3">
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#" }}>
            <strong>
              Bienvenido a FactorIA Musical, el mejor estudio virtual de música
              en el mercado.
            </strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#13388E" }}>
            <h4 className="encabezado fst-italic">
              Aprende a producir música con gran facilidad y con la mejor
              calidad, utilizando nuestra pagina web.
            </h4>
            <p className="card-text">
              Prueba a crear tu nuevo proyecto músical con nuestra{" "}
              <strong>IA </strong>, la cual te servira como guia para crear tu
              propio proyecto musical.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
