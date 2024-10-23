import React from "react"
import Menu from "../componentes/Menu"
import Portada from "../componentes/Portada"
function Inicio() {
 return(
   <div className= "header">
     <Menu/>
     <Portada/>
   </div>
 );
}
export default Inicio;