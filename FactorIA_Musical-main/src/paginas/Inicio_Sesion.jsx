import React from "react";
import Menu_LogIn from "../componentes/Menu_LogIn";
import Menu from "../componentes/Menu";
import Init from  "../componentes/Init";
function Inicio_Sesion () {
  return (
    <div className="Inicio">
      <Menu_LogIn/>
      <Menu/>
    </div>
  )
}
export default Inicio_Sesion