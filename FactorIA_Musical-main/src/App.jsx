import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import LogIn from "./paginas/LogIn"; 
import Inicio_Sesion from "./paginas/Inicio_Sesion"; 
import Reprod from "./paginas/Reproductor"; 
import Registro from "./paginas/Registro"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/LogIn" element={<LogIn />} />
        <Route exact path="/Inicio_Sesion" element={<Inicio_Sesion />} />
        <Route exact path="/Reproductor" element={<Reprod />} />
        <Route exact path="/SignUp" element={<Registro />} />
      </Routes>
    </Router>
  );
}
