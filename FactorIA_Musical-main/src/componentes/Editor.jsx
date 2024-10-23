import React from "react";

function Editor() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" />
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
      </div>
      <div class="col-8">
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-example3"
          data-bs-smooth-scroll="true"
          class="scrollspy-example-2"
          tabindex="0"
        >
          <div class="row">
            <div class="col-4">
              <div
                id="simple-list-example"
                class="d-flex flex-column gap-2 simple-list-example-scrollspy text-center"
              >
                <a class="p-1 rounded" href="#simple-list-instrumento-1">
                  Instrumento1
                </a>
                <a class="p-1 rounded" href="#simple-list-instrumento-2">
                  Instrumento2
                </a>
                <a class="p-1 rounded" href="#simple-list-instrumento-3">
                  Instrumento3
                </a>
                <a class="p-1 rounded" href="#simple-list-instrumento-4">
                  Instrumento4
                </a>
                <a class="p-1 rounded" href="#simple-list-instrumento-5">
                  Instrumento5
                </a>
              </div>
            </div>
            <div class="col-8">
              <div
                data-bs-spy="scroll"
                data-bs-target="#simple-list-example"
                data-bs-offset="0"
                data-bs-smooth-scroll="true"
                class="scrollspy-example"
                tabindex="0"
              >
                <h4 id="simple-list-instrumento-1">Instrumento1</h4>
                <p>...</p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Default striped example"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped"
                    style={{ width: "10%" }}
                  ></div>
                </div>

                <h4 id="simple-list-instrumento-2">Instrumento2</h4>
                <p>...</p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success striped example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped bg-success"
                    style={{ width: "25%" }}
                  ></div>
                </div>

                <h4 id="simple-list-instrumento-3">Instrumento3</h4>
                <p>...</p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Info striped example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped bg-info"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <h4 id="simple-list-instrumento-4">Instrumento4</h4>
                <p>...</p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Warning striped example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped bg-warning"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <h4 id="simple-list-instrumento-5">Instrumento5</h4>
                <p>...</p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Danger striped example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    class="progress-bar progress-bar-striped bg-danger"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;

// <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar progress-bar-striped" style={{="width: 10%"></div>
// </div>
// <div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
//     <div class="progress-bar progress-bar-striped bg-success" style={{="width: 25%"></div>
// </div>

// <div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar progress-bar-striped bg-info" style={{="width: 50%"></div>
// </div>
// <div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar progress-bar-striped bg-warning" style={{="width: 75%"></div>
// </div>
// <div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
//   <div class="progress-bar progress-bar-striped bg-danger" style={{="width: 100%"></div>
// </div>
